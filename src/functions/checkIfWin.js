export const checkIfWin = (matrix, setVictoryFunc) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (
        matrix[i][0].value &&
        matrix[i][0].value === matrix[i][1].value &&
        matrix[i][1].value === matrix[i][2].value
      ) {
        if (i === 0) {
          setVictoryFunc(1);
        } else if (i === 1) {
          setVictoryFunc(2);
        } else if (i === 2) {
          setVictoryFunc(3);
        }
        return true;
      } else if (
        matrix[0][j].value &&
        matrix[0][j].value === matrix[1][j].value &&
        matrix[1][j].value === matrix[2][j].value
      ) {
        if (j === 0) {
          setVictoryFunc(4);
        } else if (j === 1) {
          setVictoryFunc(5);
        } else if (j === 2) {
          setVictoryFunc(6);
        }
        return true;
      }
    }
  }
  if (
    matrix[0][0].value &&
    matrix[0][0].value === matrix[1][1].value &&
    matrix[1][1].value === matrix[2][2].value
  ) {
    setVictoryFunc(7);
    return true;
  } else if (
    matrix[2][0].value &&
    matrix[2][0].value === matrix[1][1].value &&
    matrix[1][1].value === matrix[0][2].value
  ) {
    setVictoryFunc(8);
    return true;
  }
};
