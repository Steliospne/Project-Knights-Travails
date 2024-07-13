const Board = require('./board.js');
const Dijkstra  = require('./dijkstra.js');

module.exports = class Knight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.possibleMoves = this.getPossibleMoves(x, y);
  }

  getPossibleMoves(x, y) {
    return [
      [x + 1, y + 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y + 2],
    ].filter(
      (move) => move[0] >= 0 && move[1] >= 0 && move[0] <= 7 && move[1] <= 7
    );
  }

  getPosition() {
    return Board.cells[this.x][this.y];
  }

  setPosition(x, y) {
    this.possibleMoves = this.getPossibleMoves(x, y);
    this.x = x;
    this.y = y;
    return this
  }

  moveKnight(source, target) {
    return Dijkstra(Board.cells,source,target)
  }
};
