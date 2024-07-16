function reconstructPath(prev, target) {
  let path = [];
  let currentKey = `${target.x},${target.y}`;

  while (currentKey !== null) {
    let [x, y] = currentKey.split(",").map(Number);
    path.unshift([x, y]);
    currentKey = prev.get(currentKey);
  }

  return path;
}

module.exports = function Dijkstra(Graph, source, target) {
  const dist = new Map();
  const prev = new Map();
  const Queue = new Map();
  const visitedNodes = [];

  const sourceKey = `${source.x},${source.y}`;

  for (let row of Graph) {
    for (let node of row) {
      const nodeKey = `${node.x},${node.y}`;

      dist.set(nodeKey, Infinity);
      prev.set(nodeKey, null);

      Queue.set(nodeKey, [
        [node.x, node.y],
        dist.get(nodeKey),
        prev.get(nodeKey),
      ]);
    }
  }
  dist.set(sourceKey, 0);

  Queue.set(sourceKey, [
    [source.x, source.y],
    dist.get(sourceKey),
    prev.get(sourceKey),
  ]);

  while (Queue.size !== 0) {
    const currentCoordinates = Array.from(Queue).sort(
      (a, b) => a[1][1] - b[1][1]
    )[0][1][0];
    const currentKey = `${currentCoordinates[0]},${currentCoordinates[1]}`;

    Queue.delete(currentKey);
    const current = source.setPosition(
      currentCoordinates[0],
      currentCoordinates[1]
    );

    visitedNodes.push(currentKey[0] + currentKey[2]);
    if (current.x === target.x && current.y === target.y) {
      return [visitedNodes, reconstructPath(prev, target)];
    }

    for (let move of current.possibleMoves) {
      let moveKey = `${move[0]},${move[1]}`;
      let alt = dist.get(currentKey) + 1;
      if (alt < dist.get(moveKey)) {
        dist.set(moveKey, alt);
        prev.set(moveKey, currentKey);
        Queue.set(moveKey, [
          [move[0], move[1]],
          dist.get(moveKey),
          prev.get(moveKey),
        ]);
      }
    }
  }
};
