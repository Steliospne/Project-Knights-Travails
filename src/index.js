const Board = require('./board.js');
const Knight = require('./knight.js');

Board.init()
const knight = new Knight(0,0)
const target = Board.cells[7][7];
console.log(knight.moveKnight(knight ,target));
