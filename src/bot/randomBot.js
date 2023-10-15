import { getRandomIntIn } from "../service/getRandomIntInlusive";
import SIGNS from "../utils/USERSSIGNS";
import { getArrOfEmptyCells } from "./arrOfEmptyCells";

export const randomBot = (matrix) => {
  const arrOfEmptyCells = getArrOfEmptyCells(matrix);
  const min = 1;
  const max = 9;
  let randCell = getRandomIntIn(min, max);
  while (!arrOfEmptyCells.find((i) => i.index === randCell)) {
    randCell = getRandomIntIn(min, max);
  }
  let newMatrix = JSON.parse(JSON.stringify(matrix));

  for (let row = 0; row < newMatrix.length; row++) {
    for (let cell = 0; cell < newMatrix[row].length; cell++) {
      if (newMatrix[row][cell].index === randCell) {
        newMatrix[row][cell].value = SIGNS.O;
        break;
      }
    }
  }
  return newMatrix;
};
