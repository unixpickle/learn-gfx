// An abstract particle class with a physics state.
class Particle {
  constructor(x, y, z, vx, vy, vz) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.vx = vx || 0;
    this.vy = vy || 0;
    this.vz = vz || 0;
  }
}

// An abstract base class for something which computes the
// force on every particle in a particle system.
class ForceField {
  // Compute the forces on each particle.
  // The result is an array of arrays, where each inner
  // array is of the form [x, y, z].
  forces(particles) {
    throw new Error('not implemented');
  }
}

// A large vector of positions and velocities for every
// particle in a system. Can also be used to represent the
// derivatives of said values.
class PhysicsVector {
  constructor(positions, velocities) {
    this.positions = positions;
    this.velocities = velocities;
  }

  static fromParticles(particles) {
    const positions = [];
    const velocities = [];
    particles.forEach((p) => {
      positions.push([p.x, p.y, p.z]);
      velocities.push([p.vx, p.vy, p.vz]);
    });
    return new PhysicsVector(positions, velocities);
  }

  static fromDerivative(particles, field) {
    const positions = [];
    const velocities = [];
    const forces = field.forces(particles);
    particles.forEach((p, i) => {
      positions.push([p.vx, p.vy, p.vz]);
      velocities.push(forces[i]);
    });
    return new PhysicsVector(positions, velocities);
  }

  copy() {
    const positions = this.positions.map((p) => [p[0], p[1], p[2]]);
    const velocities = this.velocities.map((v) => [v[0], v[1], v[2]]);
    return new PhysicsVector(positions, velocities);
  }

  scale(x) {
    this.positions.forEach((p) => {
      p[0] *= x;
      p[1] *= x;
      p[2] *= x;
    });
    this.velocities.forEach((v) => {
      v[0] *= x;
      v[1] *= x;
      v[2] *= x;
    });
    return this;
  }

  addTo(particles) {
    particles.forEach((p, i) => {
      const pos = this.positions[i];
      p.x += pos[0];
      p.y += pos[1];
      p.z += pos[2];
      const vel = this.velocities[i];
      p.vx += vel[0];
      p.vy += vel[1];
      p.vz += vel[2];
    });
  }

  copyTo(particles) {
    particles.forEach((p, i) => {
      const pos = this.positions[i];
      p.x = pos[0];
      p.y = pos[1];
      p.z = pos[2];
      const vel = this.velocities[i];
      p.vx = vel[0];
      p.vy = vel[1];
      p.vz = vel[2];
    });
  }
}

// Perform a step of Euler's method on the system.
function eulerStep(particles, field, dt) {
  const delta = PhysicsVector.fromDerivative(particles, field);
  delta.scale(dt);
  delta.addTo(particles);
}

// Perform a step of the RK4 method on the system.
function rk4Step(particles, field, dt) {
  const k1 = PhysicsVector.fromDerivative(particles, field).scale(dt);
  const k2 = withBackup(particles, () => {
    k1.copy().scale(0.5).addTo(particles);
    return PhysicsVector.fromDerivative(particles, field).scale(dt);
  });
  const k3 = withBackup(particles, () => {
    k2.copy().scale(0.5).addTo(particles);
    return PhysicsVector.fromDerivative(particles, field).scale(dt);
  })
  const k4 = withBackup(particles, () => {
    k3.addTo(particles);
    return PhysicsVector.fromDerivative(particles, field).scale(dt);
  })
  k1.scale(1 / 6).addTo(particles);
  k2.scale(2 / 6).addTo(particles);
  k3.scale(2 / 6).addTo(particles);
  k4.scale(1 / 6).addTo(particles);
}

function withBackup(particles, f) {
  const backup = PhysicsVector.fromParticles(particles);
  const res = f();
  backup.copyTo(particles);
  return res;
}
