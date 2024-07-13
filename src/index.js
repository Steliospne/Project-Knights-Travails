import './style.css'

const Board = require('./board.js');
const DOM = require('./DOM.js');
const Knight = require('./knight.js');

Board.init()
DOM()
const knight = new Knight(0,0)
const target = Board.cells[7][7];
console.log(knight.moveKnight(knight ,target));
