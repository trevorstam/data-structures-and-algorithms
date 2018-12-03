'use strict';

function breadthFirst(startVertex) {
  const trackingQueue = [];
  const seenVertex = new Set();

  trackingQueue.push(startVertex);
  seenVertex.add(startVertex);

  while (trackingQueue.length) {
    const currentVertex = trackingQueue.shift();

    const connected = this.getNeighbors(currentVertex);

    for (let neighbor of connected) {
      const neighborVertex = neighbor.vertex;
      if (seenVertex.has(neighborVertex)) {
        continue;
      } else {
        seenVertex.add(neighborVertex);
      }
      trackingQueue.push(neighborVertex);
    }
  }
  return seenVertex;
}