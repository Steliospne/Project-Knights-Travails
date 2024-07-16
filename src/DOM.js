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

    const node00 = document.getElementsByClassName("00")[0];
    node00.append(DOM.knightIcon(node00));
  }

  static knightIcon(parent) {
    const knightEl = document.createElement("div");
    knightEl.className = "knight";

    if (parent.style.backgroundColor == "black") {
      knightEl.style.filter = "invert(1)";
    }
    return knightEl;
  }

  static initUI() {
    const uiWrapper = document.createElement("div");
    uiWrapper.className = "ui-wrapper";

    const inputWrapper = document.createElement("div");
    inputWrapper.className = "input-wrapper";

    const startLabel = document.createElement("label");
    startLabel.textContent = "Set Knight";
    startLabel.setAttribute("for", "start");

    const startInput = document.createElement("input");
    startInput.setAttribute("type", "text");
    startInput.setAttribute("id", "start");
    startInput.setAttribute("name", "start");
    startInput.setAttribute("maxlength", "2");
    startInput.value = "00";

    const targetLabel = document.createElement("label");
    targetLabel.textContent = "Set Target";
    targetLabel.setAttribute("for", "target");

    const targetInput = document.createElement("input");
    targetInput.setAttribute("type", "text");
    targetInput.setAttribute("id", "target");
    targetInput.setAttribute("name", "target");
    targetInput.setAttribute("maxlength", "2");

    inputWrapper.append(startLabel, startInput, targetLabel, targetInput);

    const startAnimationWrapper = document.createElement("span");
    startAnimationWrapper.className = "su_button_circle";

    const startInnerWrapper = document.createElement("a");
    startInnerWrapper.className = "button_su_inner";

    const startTextWrapper = document.createElement("span");
    startTextWrapper.className = "button_text_container";

    const startButton = document.createElement("button");
    startButton.className = "start button_su";
    startTextWrapper.textContent = "Start";
    startButton.addEventListener("click", this.start);

    const stopAnimationWrapper = document.createElement("span");
    stopAnimationWrapper.className = "su_button_circle";

    const stopInnerWrapper = document.createElement("a");
    stopInnerWrapper.className = "button_su_inner";

    const stopTextWrapper = document.createElement("span");
    stopTextWrapper.className = "button_text_container";

    const stopButton = document.createElement("button");
    stopButton.className = "stop button_su";
    stopTextWrapper.textContent = "Stop";
    stopButton.addEventListener("click", this.stop);

    startInnerWrapper.append(startTextWrapper);
    startButton.append(startAnimationWrapper, startInnerWrapper);

    stopInnerWrapper.append(stopTextWrapper);
    stopButton.append(stopAnimationWrapper, stopInnerWrapper);

    uiWrapper.append(inputWrapper, startButton, stopButton);
    document.querySelector(".main").append(uiWrapper);

    mouseAnimation();
  }

  }
};
