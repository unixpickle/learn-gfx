class ShadowRastMaterial extends RastMaterial {
  constructor(maps, material, sensitivity, filterSize) {
    super();
    this.maps = maps;
    this.material = material;
    this.sensitivity = sensitivity;
    this.filterSize = filterSize || 1;
  }

  color(point, normal, light) {
    for (let i = 0; i < this.maps.length; ++i) {
      const map = this.maps[i];
      if (light.equals(map.light)) {
        const actualDepth = map.actualDepth(point);
        const frac = map.percentageCloser(point, this.sensitivity, this.filterSize);
        if (frac > 0) {
          const res = this.material.color(point, normal, light);
          res[0] = Math.round(res[0] * frac);
          res[1] = Math.round(res[1] * frac);
          res[2] = Math.round(res[2] * frac);
          return res;
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

  percentageCloser(point, sensitivity, filterSize) {
    const depth = this.actualDepth(point);
    const p = this.actualPoint(point);
    const sceneX = p.x / p.z;
    const sceneY = p.y / p.z;
    let [x, y] = this.viewport.sceneToView(sceneX, sceneY);
    x = Math.round(x);
    y = Math.round(y);
    let count = 0;
    let sum = 0;
    for (let i = -(filterSize - 1); i <= filterSize - 1; ++i) {
      for (let j = -(filterSize - 1); j <= filterSize - 1; ++j) {
        if (x + j < 0 || x + j >= this.size || y + i < 0 || y + i >= this.size) {
          continue;
        }
        ++count;
        if (this.framebuffer.getDepth(x + j, y + i) - sensitivity < depth) {
          ++sum;
        }
      }
    }
    if (count === 0) {
      return 0;
    }
    return sum / count;
  }

  bufferDepth(point) {

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
