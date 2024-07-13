const Board = require("./board");

module.exports = function initDom() {
  const boardContainer = document.createElement("div");
  boardContainer.className = "board";
  // boardContainer.style.gridTemplateAreas = 
  // `
  // "70 71 72 73 74 75 76 77"
  // "60 61 62 63 64 65 66 67"
  // "50 51 52 53 54 55 56 57"
  // "40 41 42 43 44 45 46 47"
  // "30 31 32 33 34 35 36 37"
  // "20 21 22 23 24 25 26 27"
  // "10 11 12 13 14 15 16 17"
  // "00 01 02 03 04 05 06 07"
  // `;
  document.body.append(boardContainer);


  Board.cells.forEach((row) => {
    row.forEach((node)=> {
      const tile = document.createElement("div");
      tile.className = "node " + node.x + node.y
      tile.textContent = node.x + " " + node.y
      tile.style.gridArea = "n"+ node.x + "" + node.y
      boardContainer.prepend(tile);
    })
  });
};
