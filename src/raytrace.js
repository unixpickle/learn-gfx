class Ray {
  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }
}

class Camera {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Return a row-major array of rays, one per pixel.
  rayGrid() {
    throw new Error('not implemented');
  }
}

class FrustumCamera {
  constructor(width, height, fov) {
    super(width, height);
    this.fov = fov;
  }

  rayGrid() {
    const maxDim = Math.max(this.width, this.height);
    let maxX = (this.width / maxDim) * Math.tan(this.fov / 2);
    let maxY = (this.height / maxDim) * Math.tan(this.fov / 2);
    const origin = new THREE.Vector3(0, 0, 0);
    const result = [];
    for (let y = 0; y < this.height; ++y) {
      const yDelta = maxY * (y - this.height / 2) / (this.height / 2);
      for (let x = 0; x < this.width; ++x) {
        const xDelta = maxX * (x - this.width / 2) / (this.width / 2);
        const direction = new THREE.Vector3(xDelta, yDelta, -1);
        direction.normalize();
        result.push(new Ray(origin, direction));
      }
    }
    return result;
  }
}
