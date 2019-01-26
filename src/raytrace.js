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
  constructor(object, distance, normal) {
    this.object = object;
    this.distance = distance;
    this.normal = normal;
  }

  point(ray) {
    const result = ray.direction.clone();
    result.multiplyScalar(this.distance);
    result.add(ray.origin);
    return result;
  }
}

class TriangleRayIntersection extends RayIntersection {
  constructor(object, distance, normal, barycentric) {
    super(object, distance, normal);
    this.barycentric = barycentric;
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

    return new TriangleRayIntersection(this, t, this.normal, [1 - a - b, a, b]);
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
    let min = -Infinity;
    let max = Infinity;
    const origin = [ray.origin.x, ray.origin.y, ray.origin.z];
    const direction = [ray.direction.x, ray.direction.y, ray.direction.z];
    for (let axis = 0; axis < 3; ++axis) {
      const rayOrigin = origin[axis];
      const rayDirection = direction[axis];
      if (Math.abs(rayDirection) < 1e-8) {
        if (rayOrigin < this.min[axis] || rayOrigin > this.max[axis]) {
          return false;
        }
      } else {
        const t1 = (this.min[axis] - rayOrigin) / rayDirection;
        const t2 = (this.max[axis] - rayOrigin) / rayDirection;
        min = Math.max(min, Math.min(t1, t2));
        max = Math.min(max, Math.max(t1, t2));
      }
    }
    return max >= min;
  }
}

class TransformRayObject {
  constructor(object, matrix) {
    this.object = object;
    this.setMatrix(matrix);
  }

  static translate(object, x, y, z) {
    const transform = new THREE.Matrix4();
    transform.makeTranslation(x, y, z);
    return new TransformRayObject(object, transform);
  }

  static rotate(object, x, y, z) {
    const transform = new THREE.Matrix4();
    transform.makeRotationFromEuler(new THREE.Euler(x, y, z, 'XYZ'));
    return new TransformRayObject(object, transform);
  }

  setMatrix(matrix) {
    this.matrix = matrix;
    this.normalMatrix = new THREE.Matrix3();
    this.normalMatrix.getNormalMatrix(this.matrix);
    this.rayMatrix = this.normalMatrix.clone();
    this.rayMatrix.transpose();
    this.rayPosMatrix = new THREE.Matrix4();
    this.rayPosMatrix.getInverse(this.matrix);
  }

  intersection(ray) {
    const newRay = new Ray(ray.origin.clone(), ray.direction.clone());
    newRay.origin.applyMatrix4(this.rayPosMatrix);
    newRay.direction.applyMatrix3(this.rayMatrix);
    const result = this.object.intersection(newRay);
    if (result !== null) {
      result.normal = result.normal.clone();
      result.normal.applyMatrix3(this.normalMatrix);
      result.normal.normalize();
    }
    return result;
  }
}

class RayMaterial {
  color(ray, intersection, light) {
    throw new Error('not implemented');
  }
}

class LambertRayMaterial extends RayMaterial {
  constructor(color) {
    super();
    this._color = color;
  }

  color(ray, intersection, light) {
    const offset = intersection.point(ray);
    offset.sub(light);
    offset.normalize();
    const brightness = offset.dot(intersection.normal);
    return this._color.map((x) => Math.max(0, Math.round(-x * brightness)));
  }
}

class PhongRayMaterial extends RayMaterial {
  constructor(color, power) {
    super();
    this._color = color;
    this._power = power || 1;
  }

  color(ray, intersection, light) {
    const reflection = intersection.point(ray);
    reflection.sub(light);
    reflection.reflect(intersection.normal);
    reflection.normalize();

    const rayDir = ray.direction.clone();
    rayDir.normalize();

    const brightness = reflection.dot(intersection.normal) *
      Math.pow(Math.abs(reflection.dot(rayDir)), this._power);
    return this._color.map((x) => Math.max(0, Math.round(x * brightness)));
  }
}
