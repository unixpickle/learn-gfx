class Ray {
  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }
}

class RayCamera {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Return a row-major array of rays, one per pixel.
  rayGrid() {
    throw new Error('not implemented');
  }
}

class FrustumRayCamera extends RayCamera {
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

class RayIntersection {
  constructor(distance, normal) {
    this.distance = distance;
    this.normal = normal;
  }
}

class RayObject {
  // Return a RayIntersection or null.
  intersection(ray) {
    throw new Error('not implemented');
  }
}

class TriangleRayObject extends RayObject {
  constructor(p1, p2, p3) {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    const v1 = this.p2.clone();
    const v2 = this.p3.clone();
    v1.sub(this.p1);
    v2.sub(this.p1);

    this.normal = v1.clone();
    this.normal.cross(v2);
    this.normal.normalize();

    const matrix = new THREE.Matrix3();
    matrix.set(
      v1.x, v2.x, this.normal.x,
      v1.y, v2.y, this.normal.y,
      v1.z, v2.z, this.normal.z,
    );
    this.matrix = new THREE.Matrix3();
    this.matrix.getInverse(matrix);
  }

  intersection(ray) {
    const origin = ray.origin.clone();
    const direction = ray.direction.clone();
    origin.sub(this.p1);

    origin.applyMatrix3(this.matrix);
    direction.applyMatrix3(this.matrix);
    if (Math.abs(direction.z) < 1e-8) {
      // Parallel to the plane.
      return null;
    }

    const t = -origin.z / direction.z;
    if (t < 0) {
      // Behind the camera.
      return null;
    }

    direction.multiplyScalar(t);
    origin.add(direction);
    const a = origin.x;
    const b = origin.y;

    if (a < 0 || b < 0 || a + b > 1) {
      // Outside of the triangle.
      return null;
    }

    return new RayIntersection(t, this.normal);
  }
}
