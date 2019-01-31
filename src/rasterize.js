class RastViewport {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.scale = Math.min(width / 2, height / 2);
  }

  sceneToView(x, y) {
    return [x * this.scale + this.width / 2, this.height / 2 - y * this.scale];
  }

  viewToScene(x, y) {
    return [(x - this.width / 2) / this.scale, (this.height / 2 - y) / this.scale];
  }
}

class RastFramebuffer {
  constructor(width, height, clearR, clearG, clearB) {
    this.width = width;
    this.height = height;
    this.rgb = [];
    this.depth = [];
    for (let i = 0; i < width * height; ++i) {
      this.rgb.push(clearR, clearG, clearB);
      this.depth.push(-Infinity);
    }
  }

  getDepth(x, y) {
    return this.depth[x + y * this.width];
  }

  setPixel(x, y, r, g, b, depth) {
    const idx = (x + y * this.width);
    const colorIdx = idx * 3;
    this.depth[idx] = depth;
    this.rgb[colorIdx] = r;
    this.rgb[colorIdx + 1] = g;
    this.rgb[colorIdx + 2] = b;
  }

  toCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const data = ctx.createImageData(this.width, this.height);
    for (let i = 0; i < this.width * this.height; ++i) {
      data.data[i * 4] = this.rgb[i * 3];
      data.data[i * 4 + 1] = this.rgb[i * 3 + 1];
      data.data[i * 4 + 2] = this.rgb[i * 3 + 2];
      data.data[i * 4 + 3] = 255;
    }
    ctx.putImageData(data, 0, 0);
  }
}

class RastTriangle {
  constructor(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  static sort(triangles) {
    return triangles.sort((x, y) => y.p1.z - x.p1.z);
  }

  // Clone the triangle.
  clone() {
    return new RastTriangle(this.p1.clone(), this.p2.clone(), this.p3.clone());
  }

  // Transform the triangle according to a Matrix4.
  transform(matrix) {
    this.p1.applyMatrix4(matrix);
    this.p2.applyMatrix4(matrix);
    this.p3.applyMatrix4(matrix);
  }

  // Render the triangle to the framebuffer.
  render(vp, fb, material, lights) {
    const normal = this.normal();
    this.fragments(vp, (x, y, point) => {
      if (fb.getDepth(x, y) > point.z) {
        return;
      }
      const color = [0, 0, 0];
      lights.forEach((light) => {
        const subColor = material.color(point, normal, light);
        for (let i = 0; i < 3; ++i) {
          color[i] += subColor[i];
        }
      });
      fb.setPixel(x, y, Math.min(color[0], 255), Math.min(color[1], 255), Math.min(color[2], 255),
        point.z);
    });
  }

  // Compute the normal to the triangle.
  normal() {
    const v1 = this.p2.clone();
    const v2 = this.p3.clone();
    v1.sub(this.p1);
    v2.sub(this.p1);

    const normal = v2.clone();
    normal.cross(v1);
    normal.normalize();

    return normal;
  }

  // Call the callback function with every x, y coordinate
  // that the pixel touches, as well as the corresponding
  // point in 3D. Arguments are (x, y, point3d).
  fragments(vp, cb) {
    const bounds = this._projBounds();
    let [minX, maxY] = vp.sceneToView(bounds.min.x, bounds.min.y);
    let [maxX, minY] = vp.sceneToView(bounds.max.x, bounds.max.y);
    for (let y = Math.floor(minY); y <= Math.ceil(maxY); ++y) {
      if (y < 0 || y >= vp.height) {
        continue;
      }
      for (let x = Math.floor(minX); x <= Math.ceil(maxX); ++x) {
        if (x < 0 || x >= vp.height) {
          continue;
        }
        const [sceneX, sceneY] = vp.viewToScene(x, y);
        const bary = this._projToBary(sceneX, sceneY);
        if (bary[0] < 0 || bary[1] < 0 || bary[2] < 0) {
          continue;
        }
        cb(x, y, this._baryToPoint(bary));
      }
    }
  }

  // Get the projected bounding box for the triangle.
  _projBounds() {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    [this.p1, this.p2, this.p3].forEach((p) => {
      const [x, y] = projectPoint(p);
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    });
    return { min: { x: minX, y: minY }, max: { x: maxX, y: maxY } };
  }

  // Get the 3D position for the 3D barycentric
  // coordinates.
  _baryToPoint(bary) {
    const result = this.p1.clone().multiplyScalar(bary[0]);
    result.add(this.p2.clone().multiplyScalar(bary[1]));
    result.add(this.p3.clone().multiplyScalar(bary[2]));
    return result;
  }

  // Get the 3D barycentric coordinates for the projected
  // point.
  _projToBary(x, y) {
    const mat = new THREE.Matrix3();
    const points = [this.p1, this.p2, this.p3];
    const entry = (row, col) => {
      const p = points[col];
      if (row === 0) {
        return p.x - x * p.z;
      } else {
        return p.y - y * p.z;
      }
    };
    mat.set(
      1, 1, 1,
      entry(0, 0), entry(0, 1), entry(0, 2),
      entry(1, 0), entry(1, 1), entry(1, 2),
    );
    const inv = new THREE.Matrix3();
    inv.getInverse(mat);
    return [inv.elements[0], inv.elements[1], inv.elements[2]];
  }
}

class RastMaterial {
  color(point, normal, light) {
    throw new Error('not implemented');
  }
}

class LambertRastMaterial {
  constructor(color) {
    this._color = color;
  }

  color(point, normal, light) {
    const brightness = light.dot(normal);
    const scale = Math.max(0, brightness);
    return this._color.map((c) => Math.round(c * scale));
  }
}

function projectPoint(p) {
  return [p.x / p.z, p.y / p.z];
}
