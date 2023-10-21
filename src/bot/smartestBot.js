import SIGNS from "../utils/USERSSIGNS";
import { getArrOfEmptyCells } from "./arrOfEmptyCells";
import { randomBot } from "./randomBot";
const handleLater = (matrix) => randomBot(matrix);

const smartestBot = (matrix) => {
  const arrOfEmpty = getArrOfEmptyCells(matrix);
  let newMatrix = JSON.parse(JSON.stringify(matrix));
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
      return handleLater(newMatrix);
    }
  } else {
    // a move after first move
    return handleLater(newMatrix);
    // TODO: figure out algorithm for the rest of the game
    // ?MAYBE DO A SEPERATE ALGORITHM FOR EACH MOVE? - INCLUDING CHECKING THE POSITIONS OF ENEMY / SELF POSITIONS
  }
};
// TODO: only first move{
//? [[1,2,3],[4,5,6],[7,8,9]]
//! [1*, 2, 3*, 4, 5, 6, 7*, 8, 9*];
// senario 1 - indexes 1,3,7,9
// *solution
// only solution to avoid 100% winning by oponent is to respond in the middle
// !DONE

//! [1,2*,3,4*,5,6*,7,8*,9]
// senario 2 - all even indexes of matrix{index:X}
// *solution
// example for concept - if 1st player put in 4 - then DONT respond with 2 or 8 (diagonalic to 4) - 100% loss
// import exampleOne from "../assets/exampleOne.bmp";
// example for concept -if 1st player put in 4 - then DONT respond with 6(for in row to 4) - 100% loss if 1st player then responds with 2/8
// import exampleTwo from "../assets/exampleTwo.bmp";

//! [1,2,3,4,5*,6,7,8,9]
// senario - in middle
// *solution
//TODO }

export default smartestBot;
