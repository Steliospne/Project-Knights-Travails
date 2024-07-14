const Board = require("./board");

module.exports = class DOM {
  static init() {
    const boardContainer = document.createElement("div");
    boardContainer.className = "board";

    const labelXcontainer = document.createElement("div");
    labelXcontainer.className = "labelX";

    const labelYcontainer = document.createElement("div");
    labelYcontainer.className = "labelY";

    document.body.append(boardContainer, labelXcontainer, labelYcontainer);

    Board.cells.forEach((row) => {
      row.forEach((node) => {
        const tile = document.createElement("div");
        tile.className = "node " + node.x + node.y;
        // tile.textContent = node.x + " " + node.y;
        tile.style.gridArea = "n" + node.x + "" + node.y;
        boardContainer.prepend(tile);

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
