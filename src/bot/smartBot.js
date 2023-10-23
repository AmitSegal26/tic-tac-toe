import { getRandomIntIn } from "../service/getRandomIntInlusive";
import SIGNS from "../utils/USERSSIGNS";
import { getArrOfEmptyCells } from "./arrOfEmptyCells";
import { randomBot } from "./randomBot";
const handleLater = (matrix) => randomBot(matrix);

//? TODO: make only one option to win each game, and randomize the way to win each game

const smartBot = (matrix) => {
  const arrOfEmpty = getArrOfEmptyCells(matrix);
  let newMatrix = JSON.parse(JSON.stringify(matrix));
  let isDefensiveMode = false;
  let isMoveDone = false;

  const signOfPlayerFirstPLayer = () => {
    // x player
    return isDefensiveMode ? SIGNS.X : SIGNS.O;
  };
  const signOfPlayerResponderPlayer = (isToPlace = false) => {
    // o player
    return isDefensiveMode ? SIGNS.O : isToPlace ? SIGNS.O : SIGNS.X;
  };
  if (arrOfEmpty.length === 8) {
    // meaning this it the first move of the bot
    //* loops for corners move
    for (let i = 0; i < newMatrix.length; i += 2) {
      for (let j = 0; j < newMatrix[i].length; j += 2) {
        if (newMatrix[i][j].value !== "") {
          // ?is on of the corners marked on first move by the opponent
          newMatrix[1][1].value = SIGNS.O;
          return newMatrix;
        }
      }
    }
    //* loops for borders move
    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < newMatrix[i].length; j++) {
        if (i + j === 3 || i + j === 1) {
          // ?meaning the borders in the middle
          if ((j === 1 || i === 1) && newMatrix[i][j].value !== "") {
            newMatrix[1][1].value = SIGNS.O;
            return newMatrix;
          }
        }
      }
    }
    //* for middle move
    if (newMatrix[1][1].value !== "") {
      // ?is middle cell move
      let arr = [];
      for (let i = 0; i < newMatrix.length; i += 2) {
        for (let j = 0; j < newMatrix[i].length; j += 2) {
          if (newMatrix[i][j].value === "") {
            arr = [...arr, newMatrix[i][j].index];
          }
        }
      }
      const rand = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      switch (rand) {
        case 1:
          newMatrix[0][0].value = SIGNS.O;
          break;
        case 2:
          newMatrix[0][2].value = SIGNS.O;
          break;
        case 3:
          newMatrix[2][0].value = SIGNS.O;
          break;
        case 4:
          newMatrix[2][2].value = SIGNS.O;
          break;
        default:
          newMatrix[0][0].value = SIGNS.O;
          break;
      }
      return newMatrix;
    }
  } else {
    for (let counter = 0; counter < 2 && !isMoveDone; counter++) {
      //! a move after first move
      // change!
      if (!getRandomIntIn(0, 3) && false) {
        // decides wether to do a smart move or not
        return handleLater(newMatrix);
      } else {
        // * corners scan
        // an array with 3 indexes - pointing to the matrix array
        const arrOfTopLeftToBottomRightDiagonalLine = [
          newMatrix[0][0],
          newMatrix[1][1],
          newMatrix[2][2],
        ];
        const arrOfBottomLeftToTopRightDiagonalLine = [
          newMatrix[2][0],
          newMatrix[1][1],
          newMatrix[0][2],
        ];
        // checking TopLeftToBottomRightDiagonalLine
        let counterForX = 0;
        let counterForO = 0;
        for (let i = 0; i < arrOfTopLeftToBottomRightDiagonalLine.length; i++) {
          counterForX +=
            arrOfTopLeftToBottomRightDiagonalLine[i].value ===
            signOfPlayerFirstPLayer()
              ? 1
              : 0;
          counterForO +=
            arrOfTopLeftToBottomRightDiagonalLine[i].value ===
            signOfPlayerResponderPlayer()
              ? 1
              : 0;
        }
        if (counterForX === 2 && counterForO === 0) {
          for (
            let i = 0;
            i < arrOfTopLeftToBottomRightDiagonalLine.length;
            i++
          ) {
            if (arrOfTopLeftToBottomRightDiagonalLine[i].value === "") {
              arrOfTopLeftToBottomRightDiagonalLine[i].value =
                signOfPlayerResponderPlayer(true);
              return newMatrix;
            }
          }
        }
        // checking BottomLeftToTopRightDiagonalLine
        counterForX = 0;
        counterForO = 0;
        for (let i = 0; i < arrOfBottomLeftToTopRightDiagonalLine.length; i++) {
          counterForX +=
            arrOfBottomLeftToTopRightDiagonalLine[i].value ===
            signOfPlayerFirstPLayer()
              ? 1
              : 0;
          counterForO +=
            arrOfBottomLeftToTopRightDiagonalLine[i].value ===
            signOfPlayerResponderPlayer()
              ? 1
              : 0;
        }
        if (counterForX === 2 && counterForO === 0) {
          for (
            let i = 0;
            i < arrOfBottomLeftToTopRightDiagonalLine.length;
            i++
          ) {
            if (arrOfBottomLeftToTopRightDiagonalLine[i].value === "") {
              arrOfBottomLeftToTopRightDiagonalLine[i].value =
                signOfPlayerResponderPlayer(true);
              return newMatrix;
            }
          }
        }
        // * straight lines scan (horizontal + vertical)
        for (let i = 0; i < newMatrix.length; i++) {
          let counterForXHorizontal = 0;
          let counterForOHorizontal = 0;
          let counterForXVertical = 0;
          let counterForOVertical = 0;
          for (let j = 0; j < newMatrix[i].length; j++) {
            counterForXVertical +=
              newMatrix[i][j].value === signOfPlayerFirstPLayer() ? 1 : 0;
            counterForOVertical +=
              newMatrix[i][j].value === signOfPlayerResponderPlayer() ? 1 : 0;
            counterForXHorizontal +=
              newMatrix[j][i].value === signOfPlayerFirstPLayer() ? 1 : 0;
            counterForOHorizontal +=
              newMatrix[j][i].value === signOfPlayerResponderPlayer() ? 1 : 0;
            if (
              counterForXVertical === 2 &&
              counterForOVertical === 0 &&
              j === 2
            ) {
              for (let k = 0; k < newMatrix[i].length; k++) {
                if (newMatrix[i][k].value !== signOfPlayerFirstPLayer()) {
                  newMatrix[i][k].value = signOfPlayerResponderPlayer(true);
                  return newMatrix;
                }
              }
            } else if (
              counterForXHorizontal === 2 &&
              counterForOHorizontal === 0 &&
              j === 2
            ) {
              for (let k = 0; k < newMatrix[i].length; k++) {
                if (newMatrix[k][i].value !== signOfPlayerFirstPLayer()) {
                  newMatrix[k][i].value = signOfPlayerResponderPlayer(true);
                  return newMatrix;
                }
              }
            } else {
            }
          }
        }
      }
      isDefensiveMode = true;
      isMoveDone = false;
      if (counter === 1) return handleLater(newMatrix);
      // ?MAYBE DO A SEPERATE ALGORITHM FOR EACH MOVE? - INCLUDING CHECKING THE POSITIONS OF ENEMY / SELF POSITIONS
    }
  }
};

export default smartBot;
