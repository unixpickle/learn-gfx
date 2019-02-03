class ShadowMap {
  constructor(triangles, light, sceneCenter, size) {
    this.basis = shadowMapBasis(light, sceneCenter);
    this.light = light;
    this.triangles = triangles.map((t) => {
      const points = [t.p1, t.p2, t.p3].map((v) => v.clone());
      points.forEach((v) => v.applyMatrix3(this.basis));
      return new RastTriangle(points[0], points[1], points[2]);
    });
    this.viewport = new RastViewport(size, size);
    this.framebuffer = new RastFramebuffer(size, size, 0, 0, 0);
    const mat = new LambertRastMaterial([255, 255, 255]);
    this.triangles.forEach((t) => t.render(this.viewport, this.framebuffer, mat, [light]));
  }

  actualDepth(point) {
    const p = point.clone();
    p.applyMatrix3(this.basis);
    return p.z;
  }

  bufferDepth(point) {
    const p = point.clone();
    p.applyMatrix3(this.basis);
    const sceneX = p.x / p.z;
    const sceneY = p.y / p.z;
    const coord = this.viewport.sceneToView(sceneX, sceneY);
    if (coord[0] < 0 || coord[0] >= this.size || coord[1] < 0 || coord[1] >= this.size) {
      return null;
    }
    return this.framebuffer.getDepth(sceneX, sceneY);
  }
}

function shadowMapBasis(light, sceneCenter) {
  const v1 = sceneCenter.clone();
  v1.sub(light);
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
