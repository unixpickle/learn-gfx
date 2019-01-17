class Spring {
  constructor(p1, p2, len) {
    this.p1 = p1;
    this.p2 = p2;
    this.len = len;
  }
}

class Mesh {
  constructor(rows, cols, k, damping, posFn) {
    this.rows = rows;
    this.cols = cols;
    this.k = k;
    this.damping = damping;
    this.particles = [];
    for (let i = 0; i < rows; ++i) {
      for (let j = 0; j < cols; ++j) {
        const [x, y, z] = posFn(i, j);
        this.particles.push(new Particle(x, y, z));
      }
    }
    this.springs = [];
    for (let i = 0; i < rows; ++i) {
      for (let j = 0; j < cols; ++j) {
        const p = this.index(i, j);
        // Structural springs.
        if (i > 0) {
          this.addSpring(this.index(i - 1, j), p);
        }
        if (j > 0) {
          this.addSpring(this.index(i, j - 1), p);
        }
        // Shear springs.
        if (i > 0 && j > 0) {
          this.addSpring(this.index(i - 1, j - 1), p);
        }
        if (i > 0 && j + 1 < cols) {
          this.addSpring(this.index(i - 1, j + 1), p);
        }
        // Flexion springs.
        if (i > 1) {
          this.addSpring(this.index(i - 2, j), p);
        }
        if (j > 1) {
          this.addSpring(this.index(i, j - 2), p);
        }
      }
    }
  }

  index(i, j) {
    return i * this.cols + j;
  }

  addSpring(p1, p2) {
    const distance = this.particles[p1].distance(this.particles[p2]);
    this.springs.push(new Spring(p1, p2, distance));
  }

  forces(particles) {
    if (particles.length !== this.particles.length) {
      throw new Error('unexpected particles');
    }
    particles.forEach((p, i) => {
      if (p != this.particles[i]) {
        throw new Error('unexpected particles');
      }
    });
    let result = [];
    for (let i = 0; i < this.particles.length; ++i) {
      result[i] = [0, 0, 0];
    }
    this.springs.forEach((spring) => {
      const p1 = this.particles[spring.p1];
      const p2 = this.particles[spring.p2];
      const distance = p1.distance(p2);
      const forceMag = this.k * (distance - spring.len);
      let fx = p2.x - p1.x;
      let fy = p2.y - p1.y;
      let fz = p2.z - p1.z;
      const scale = forceMag / Math.sqrt(Math.pow(fx, 2) + Math.pow(fy, 2) + Math.pow(fz, 2));
      fx *= scale;
      fy *= scale;
      fz *= scale;
      result[spring.p1][0] += fx;
      result[spring.p1][1] += fy;
      result[spring.p1][2] += fz;
      result[spring.p2][0] -= fx;
      result[spring.p2][1] -= fy;
      result[spring.p2][2] -= fz;
    });
    this.particles.forEach((p, i) => {
      result[i][0] -= this.damping * p.vx;
      result[i][1] -= this.damping * p.vy;
      result[i][2] -= this.damping * p.vz;
    });
    return result;
  }
}