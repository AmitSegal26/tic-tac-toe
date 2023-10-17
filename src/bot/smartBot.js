import SIGNS from "../utils/USERSSIGNS";
import { getArrOfEmptyCells } from "./arrOfEmptyCells";
import { randomBot } from "./randomBot";
const handleLater = (matrix) => randomBot(matrix);
const smartBot = (matrix) => {
  const arrOfEmpty = getArrOfEmptyCells(matrix);
  let newMatrix = JSON.parse(JSON.stringify(matrix));
  if (arrOfEmpty.length === 8) {
    // meaning this it the first move of the bot
    for (let i = 0; i < newMatrix.length; i += 2) {
      for (let j = 0; j < newMatrix[i].length; j += 2) {
        if (newMatrix[i][j].value !== "") {
          // ?is on of the corners marked on first move by the opponent
          let isOptionOne = Math.floor(Math.random() * 10) > 5;
          if (i === 0) {
            // first row
            if (isOptionOne) {
              newMatrix[i + 2][j].value = SIGNS.O;
            } else {
              newMatrix[i][j === 2 ? j - 2 : j + 2].value = SIGNS.O;
            }
          } else {
            // third row
            if (isOptionOne) {
              newMatrix[i - 2][j].value = SIGNS.O;
            } else {
              newMatrix[i][j === 0 ? j + 2 : j - 2].value = SIGNS.O;
            }
          }
          return newMatrix;
        } else if (true) {
          // ? is in the middle of borders
        } else {
          // ?is in the middle
        }
      }
    }
  } else {
    newMatrix = handleLater(newMatrix);
    // TODO: figure out algorithm for the rest of the game
    // ?MAYBE DO A SEPERATE ALGORITHM FOR EACH MOVE? - INCLUDING CHECKING THE POSITIONS OF ENEMY / SELF POSITIONS
  }
  console.table(newMatrix);
  return newMatrix;
};
// TODO: only first move
//? [[1,2,3],[4,5,6],[7,8,9]]
//! [1*, 2, 3*, 4, 5, 6, 7*, 8, 9*];
// senario 1 - indexes 1,3,7,9
// *solution
// if 1/3 => put in +6 index
// if 7/9 => put in -6 index

//! [1,2*,3,4*,5,6*,7,8*,9]
// senario 2 - all even indexes of matrix{index:X}
// *solution
// put in middle [5]

//! [1,2,3,4,5*,6,7,8,9]
// senario - in middle
// *solution
//TODO

export default smartBot;
