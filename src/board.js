const Node = require('./node.js');

module.exports = class Board {
  static cells = [];
  static width = 8;
  static height = 8;

  static init() {
    for (let i = 0; i < this.height; i++) {
      this.cells[i] = [];
      for (let j = 0; j < this.width; j++) {
        this.cells[i].push(new Node(i, j));
      }
    }
  }

}
