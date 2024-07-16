const Board = require("./board.js");
const Knight = require("./knight.js");

const mouseAnimation = require("./buttonAnimation.js");

module.exports = class DOM {
  static animationInterval;
  static target;
  static shortestPath;
  static visitedNodes = [];

  static header() {
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Knight Travails";

    document.body.append(header);
  }

  static footer() {}

  static initMain() {
    const main = document.createElement("div");
    main.className = "main";

    document.body.append(main);
  }

  static initBoard() {
    document.querySelector(".main").innerHTML = "";
    const boardWrapper = document.createElement("div");
    boardWrapper.className = "boardWrapper";

    const board = document.createElement("div");
    board.className = "board";

    const labelXcontainer = document.createElement("div");
    labelXcontainer.className = "labelX";

    const labelYcontainer = document.createElement("div");
    labelYcontainer.className = "labelY";

    document.querySelector(".main").append(boardWrapper);
    boardWrapper.append(board, labelXcontainer, labelYcontainer);

    Board.cells.forEach((row) => {
      row.forEach((node) => {
        const tile = document.createElement("div");
        tile.className = "node " + node.x + node.y;
        // tile.textContent = node.x + " " + node.y;
        tile.style.gridArea = "n" + node.x + "" + node.y;
        board.prepend(tile);

        if (node.x % 2 == 0) {
          if (node.y % 2 == 0) {
            tile.style.backgroundColor = "black";
          }
        } else {
          if (!(node.y % 2 == 0)) {
            tile.style.backgroundColor = "black";
          }
        }
      });
    });

    for (let i = 0; i < 8; i++) {
      const numberX = document.createElement("div");
      const numberY = document.createElement("div");
      numberX.className = numberY.className = "node";
      numberX.textContent = numberY.textContent = i;
      labelXcontainer.append(numberX);
      labelYcontainer.prepend(numberY);
    }
  }
};
