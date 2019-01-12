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