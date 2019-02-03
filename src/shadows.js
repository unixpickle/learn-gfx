class ShadowRastMaterial extends RastMaterial {
  constructor(maps, material, sensitivity) {
    super();
    this.maps = maps;
    this.material = material;
    this.sensitivity = sensitivity;
  }

  color(point, normal, light) {
    for (let i = 0; i < this.maps.length; ++i) {
      const map = this.maps[i];
      if (light.equals(map.light)) {
        const actualDepth = map.actualDepth(point);
        const bufDepth = map.bufferDepth(point);
        if (bufDepth === null || Math.abs(actualDepth - bufDepth) < this.sensitivity) {
          return this.material.color(point, normal, light);
        } else {
          return [0, 0, 0];
        }
      }
    }
    return this.material.color(point, normal, light);
  }
}

class ShadowMap {
  constructor(triangles, light, sceneCenter, size) {
    this.basis = shadowMapBasis(light, sceneCenter);
    this.light = light;
    triangles = triangles.map((t) => {
      const points = [t.p1, t.p2, t.p3].map((p) => this.actualPoint(p));
      return new RastTriangle(points[0], points[1], points[2]);
    });
    this.viewport = new RastViewport(size, size);
    this.framebuffer = new RastFramebuffer(size, size, 0, 0, 0);
    const mat = new ConstRastMaterial([255, 255, 255]);
    triangles.forEach((t) => t.render(this.viewport, this.framebuffer, mat, [light]));
  }

  actualPoint(point) {
    const p = point.clone();
    p.sub(this.light);
    p.applyMatrix3(this.basis);
    return p;
  }

  actualDepth(point) {
    return this.actualPoint(point).z;
  }

  bufferDepth(point) {
    const p = this.actualPoint(point);
    const sceneX = p.x / p.z;
    const sceneY = p.y / p.z;
    let [x, y] = this.viewport.sceneToView(sceneX, sceneY);
    x = Math.round(x);
    y = Math.round(y);
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      return null;
    }
    return this.framebuffer.getDepth(x, y);
  }
}

function shadowMapBasis(light, sceneCenter) {
  const v1 = light.clone();
  v1.sub(sceneCenter);
  v1.normalize();

  let v2 = new THREE.Vector3(-v1.y, v1.x, 0);
  if (Math.abs(v1.z - 1) < 1e-8) {
    v2 = new THREE.Vector3(1, 0, 0);
  }

  let v3 = v2.clone();
  v3.cross(v1);

  const result = new THREE.Matrix3();
  result.set(
    v2.x, v2.y, v2.z,
    v3.x, v3.y, v3.z,
    v1.x, v1.y, v1.z,
  );
  return result;
}
