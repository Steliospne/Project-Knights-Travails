import "./style.css";

const Board = require("./board.js");
const DOM = require("./DOM.js");

window.onload = () => {
  Board.init();
  DOM.header();
  DOM.initMain();
  DOM.initBoard();
  DOM.initUI();
};
