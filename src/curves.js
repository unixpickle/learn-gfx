// A one-dimensional cubic curve.
class Cubic1D {
  constructor(ctrl) {
    this.ctrl = ctrl.slice();
  }

  // Create a curve from cubic coefficients.
  static fromCoefficients(coeffs) {
    throw new Error('not implemented');
  }

  // Get a matrix mapping from control points to
  // coefficients.
  inverseMatrix() {
    throw new Error('not implemented');
  }

  // Get an array of four control points.
  controlPoints() {
    return this.ctrl.slice();
  }

  // Update the control points.
  setControlPoints(points) {
    this.ctrl = points.slice();
  }

  // Get [a, b, c, d], the coefficients for
  // t^3, t^2, t, 1 respectively.
  coefficients() {
    const matrix = this.inverseMatrix();
    const ctrl = this.controlPoints();
    return matMulVector(matrix, ctrl);
  }

  eval(t) {
    const coeffs = this.coefficients();
    return coeffs[0] * (t * t * t) + coeffs[1] * (t * t) + coeffs[2] * t + coeffs[3];
  }
}

// A one-dimensional cubic curve that goes through points.
class Interp1D extends Cubic1D {
  static fromCoefficients(coeffs) {
    function y(t) {
      return coeffs[0] * (t * t * t) + coeffs[1] * (t * t) + coeffs[2] * t + coeffs[3];
    }
    return new Interp1D([0, 1 / 3, 2 / 3, 1].map(y));
  }

  inverseMatrix() {
    return [
      [-4.5, 13.5, -13.5, 4.5],
      [9, -22.5, 18, -4.5],
      [-5.5, 9, -4.5, 1],
      [1, 0, 0, 0],
    ];
  }
}

// A one-dimensional cubic Bezier curve.
class Bezier1D extends Cubic1D {
  static fromCoefficients(coeffs) {
    const curve = Interp1D.fromCoefficients(coeffs);
    const p = [curve.eval(0), curve.eval(1 / 3), curve.eval(2 / 3), curve.eval(1)];
    const matrix = [
      [1, 0, 0, 0],
      [-0.83333333, 3, -1.5, 0.33333333],
      [0.33333333, -1.5, 3, -0.83333333],
      [0, 0, 0, 1],
    ];
    const ctrl = matMulVector(matrix, p);
    return new Bezier1D(ctrl);
  }

  inverseMatrix() {
    return [
      [-1, 3, -3, 1],
      [3, -6, 3, 0],
      [-3, 3, 0, 0],
      [1, 0, 0, 0],
    ];
  }
}

// A cubic B-spline.
class BSpline1D extends Cubic1D {
  static fromCoefficients(coeffs) {
    const matrix = [
      [0, 2 / 3, -1, 1],
      [0, -1 / 3, 0, 1],
      [0, 2 / 3, 1, 1],
      [6, 11 / 3, 2, 1],
    ];
    return new BSpline1D(matMulVector(matrix, coeffs));
  }

  inverseMatrix() {
    return [
      [-0.16666667, 0.5, -0.5, 0.16666667],
      [0.5, -1., 0.5, 0.],
      [-0.5, -0., 0.5, -0.],
      [0.16666667, 0.66666667, 0.16666667, 0.],
    ];
  }
}

// A Cartesian product of two Cubic1D's.
class Cubic2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Get an array of four [x, y] control points.
  controlPoints() {
    const x = this.x.controlPoints();
    const y = this.y.controlPoints();
    return [[x[0], y[0]], [x[1], y[1]], [x[2], y[2]], [x[3], y[3]]];
  }

  // Update the control points.
  setControlPoints(p) {
    this.x.setControlPoints([p[0][0], p[1][0], p[2][0], p[3][0]]);
    this.y.setControlPoints([p[0][1], p[1][1], p[2][1], p[3][1]]);
  }

  // Get the [x, y] value at time t.
  eval(t) {
    return [this.x.eval(t), this.y.eval(t)];
  }
}

function matMulVector(mat, vec) {
  return mat.map((row) => {
    return row[0] * vec[0] + row[1] * vec[1] + row[2] * vec[2] + row[3] * vec[3];
  })
}
