// A one-dimensional cubic curve.
class Cubic1D {
  // Create a curve from cubic coefficients.
  static fromCoefficients(coeffs) {
    throw new Error('not implemented');
  }

  // Get an array of four control points.
  controlPoints() {
    return this.coefficients();
  }

  // Update the control points.
  setControlPoints(points) {
    throw new Error('not implemented');
  }

  // Get [a, b, c, d], the coefficients for
  // t^3, t^2, t, 1 respectively.
  coefficients() {
    const matrix = this.inverseMatrix();
    const ctrl = this.controlPoints();
    return matrix.map((row) => {
      return row[0] * ctrl[0] + row[1] * ctrl[1] + row[2] * ctrl[2] + row[3] * ctrl[3];
    })
  }

  eval(t) {
    const coeffs = this.coefficients();
    return coeffs[0] * (t * t * t) + coeffs[1] * (t * t) + coeffs[2] * t + coeffs[3];
  }
}

// A one-dimensional cubic curve that goes through points.
class Interp1D extends Cubic1D {
  constructor(y1, y2, y3, y4) {
    super();
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
    this.y4 = y4;
  }

  static fromCoefficients(coeffs) {
    function y(t) {
      return coeffs[0] * (t * t * t) + coeffs[1] * (t * t) + coeffs[2] * t + coeffs[3];
    }
    return new Interp1D(y(0), y(1 / 3), y(2 / 3), y(1));
  }

  controlPoints() {
    return [this.y1, this.y2, this.y3, this.y4];
  }

  setControlPoints(points) {
    this.y1 = points[0];
    this.y2 = points[1];
    this.y3 = points[2];
    this.y4 = points[3];
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
