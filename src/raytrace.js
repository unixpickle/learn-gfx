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
      const yDelta = -maxY * (y - this.height / 2) / (this.height / 2);
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

    const a = origin.x + t * direction.x;
    const b = origin.y + t * direction.y;
    if (a < 0 || b < 0 || a + b > 1) {
      // Outside of the triangle.
      return null;
    }

    return new RayIntersection(t, this.normal);
  }

  axisMin(axis) {
    if (axis === 0) {
      return Math.min(this.p1.x, this.p2.x, this.p3.x);
    } else if (axis === 1) {
      return Math.min(this.p1.y, this.p2.y, this.p3.y);
    } else {
      return Math.min(this.p1.z, this.p2.z, this.p3.z);
    }
  }

  axisMax(axis) {
    if (axis === 0) {
      return Math.max(this.p1.x, this.p2.x, this.p3.x);
    } else if (axis === 1) {
      return Math.max(this.p1.y, this.p2.y, this.p3.y);
    } else {
      return Math.max(this.p1.z, this.p2.z, this.p3.z);
    }
  }
}

class MeshRayObject {
  constructor(triangles, axis) {
    axis = axis || 0;
    this.triangles = triangles.slice();
    this.triangles.sort((a, b) => a.axisMin(axis) - b.axisMin(axis));
    if (this.triangles.length > 1) {
      const midpoint = Math.floor(this.triangles.length / 2);
      const newAxis = (axis + 1) % 3;
      this.group1 = new MeshRayObject(this.triangles.slice(0, midpoint), newAxis);
      this.group2 = new MeshRayObject(this.triangles.slice(midpoint), newAxis);
      this.min = this.group1.min.map((x, i) => Math.min(x, this.group2.min[i]));
      this.max = this.group1.max.map((x, i) => Math.max(x, this.group2.max[i]));
    } else {
      this.min = [0, 1, 2].map((axis) => this.triangles[0].axisMin(axis));
      this.max = [0, 1, 2].map((axis) => this.triangles[0].axisMax(axis));
    }
  }

  intersection(ray) {
    if (this.triangles.length === 1) {
      return this.triangles[0].intersection(ray);
    } else if (!this.boxIntersects(ray)) {
      return null;
    }
    const isect1 = this.group1.intersection(ray);
    const isect2 = this.group2.intersection(ray);
    if (isect1 === null) {
      return isect2;
    } else if (isect2 === null) {
      return isect1;
    } else if (isect1.distance < isect2.distance) {
      return isect1;
    } else {
      return isect2;
    }
  }

  boxIntersects(ray) {
    const xRange = this.boxAxisRange(0, ray.origin.x, ray.direction.x);
    const yRange = this.boxAxisRange(1, ray.origin.y, ray.direction.y);
    const zRange = this.boxAxisRange(2, ray.origin.z, ray.direction.z);
    const min = Math.max(xRange.min, yRange.min, zRange.min);
    const max = Math.min(xRange.max, yRange.max, zRange.max);
    return max >= min;
  }

  boxAxisRange(axis, rayOrigin, rayDirection) {
    if (Math.abs(rayDirection) < 1e-8) {
      if (rayOrigin >= this.min[axis] && rayOrigin <= this.max[axis]) {
        return { min: -Infinity, max: Infinity };
      } else {
        return { min: -Infinity, max: -Infinity };
      }
    }
    const t1 = (this.min[axis] - rayOrigin) / rayDirection;
    const t2 = (this.max[axis] - rayOrigin) / rayDirection;
    if (t1 < t2) {
      return { min: t1, max: t2 };
    } else {
      return { min: t2, max: t1 };
    }
  }
}
