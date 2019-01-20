// Generate a smoothed set of points by dividing the
// points `numDivisions` times using a cutting fraction
// of `fraction`.
// Each point is an [x, y] array.
function cornerCutting(points, numDivisions, fraction) {
  for (let i = 0; i < numDivisions; ++i) {
    let newPoints = [];
    for (let i = 0; i < points.length; ++i) {
      let p1 = points[(i + points.length - 1) % points.length];
      let p2 = points[i];
      let p3 = points[(i + 1) % points.length];
      newPoints.push([
        fraction * p1[0] + (1 - fraction) * p2[0],
        fraction * p1[1] + (1 - fraction) * p2[1],
      ]);
      newPoints.push([
        fraction * p3[0] + (1 - fraction) * p2[0],
        fraction * p3[1] + (1 - fraction) * p2[1],
      ]);
    }
    points = newPoints;
  }
  return points;
}

// Perform a step of Loop subdivision on the surface.
// The vertices are represented as an array of arrays,
// where each interior array contains three coordinates,
// and triangles are made from each consecutive triplet.
function loopSubdivision(vertices) {
  if (vertices.length % 3) {
    throw new Error('invalid triangle mesh');
  }
  const adj = new MeshAdjacency(vertices);
  const newVertices = [];
  for (let i = 0; i < vertices.length; i += 3) {
    const p1 = vertices[i];
    const p2 = vertices[i + 1];
    const p3 = vertices[i + 2];
    newVertices.push(loopSubdivisionEven(adj, p1));
    newVertices.push(loopSubdivisionOdd(adj, p1, p2));
    newVertices.push(loopSubdivisionOdd(adj, p1, p3));

    newVertices.push(loopSubdivisionEven(adj, p2));
    newVertices.push(loopSubdivisionOdd(adj, p2, p3));
    newVertices.push(loopSubdivisionOdd(adj, p2, p1));

    newVertices.push(loopSubdivisionEven(adj, p3));
    newVertices.push(loopSubdivisionOdd(adj, p3, p1));
    newVertices.push(loopSubdivisionOdd(adj, p3, p2));

    newVertices.push(loopSubdivisionOdd(adj, p1, p2));
    newVertices.push(loopSubdivisionOdd(adj, p2, p3));
    newVertices.push(loopSubdivisionOdd(adj, p3, p1));
  }
  return newVertices;
}

function loopSubdivisionEven(adj, p) {
  const neighbors = adj.adjacentVertices(p);
  const n = neighbors.length;
  const beta = (5 / 8 - Math.pow(3 / 8 + Math.cos(2 * Math.PI / n) / 4, 2)) / n;
  const result = [0, 0, 0];
  for (let i = 0; i < 3; ++i) {
    let sum = (1 - n * beta) * p[i];
    neighbors.forEach((p1) => sum += p1[i] * beta);
    result[i] = sum;
  }
  return result;
}

function loopSubdivisionOdd(adj, p1, p2) {
  const neighbors = adj.verticesNearEdge(p1, p2);
  if (neighbors.length !== 2) {
    return midpoint3D(p1, p2);
  }
  const result = [0, 0, 0];
  for (let i = 0; i < 3; ++i) {
    result[i] = 3 / 8 * p1[i] + 3 / 8 * p2[i] + 1 / 8 * neighbors[0][i] + 1 / 8 * neighbors[1][i];
  }
  return result;
}

// An adjacency map for triangle meshes.
//
// Operates on an array of vertices, where each vertex is
// an array of three numbers, and each triangle is stored
// as three consecutive vertices.
class MeshAdjacency {
  constructor(vertices) {
    this.vertices = vertices;
    this.pointToTriangles = {};
    for (let i = 0; i < vertices.length; i += 3) {
      const id = i / 3;
      for (let j = i; j < i + 3; ++j) {
        const p = vertices[j];
        if (!this.pointToTriangles[p]) {
          this.pointToTriangles[p] = [];
        }
        this.pointToTriangles[p].push(id);
      }
    }
  }

  triangle(id) {
    return this.vertices.slice(id * 3, id * 3 + 3);
  }

  verticesNearEdge(p1, p2) {
    const result = [];
    this.pointToTriangles[p1].filter((t) => {
      return containsPoint(this.triangle(t), p2);
    }).forEach((t) => {
      this.triangle(t).forEach((p) => {
        if (!pointsEqual(p, p1) && !pointsEqual(p, p2)) {
          result.push(p);
        }
      });
    });
    return result;
  }

  adjacentVertices(p) {
    const result = [];
    this.pointToTriangles[p].forEach((t) => {
      this.triangle(t).forEach((p1) => {
        if (!pointsEqual(p1, p) && !containsPoint(result, p1)) {
          result.push(p1);
        }
      });
    });
    return result;
  }
}

function midpoint3D(p1, p2) {
  return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, (p1[2] + p2[2]) / 2];
}

function containsPoint(shape, p) {
  for (let i = 0; i < shape.length; ++i) {
    if (pointsEqual(shape[i], p)) {
      return true;
    }
  }
  return false;
}

function pointsEqual(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1] && p1[2] === p2[2];
}
