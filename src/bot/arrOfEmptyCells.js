export const getArrOfEmptyCells = (matrix) => {
  if (!matrix) {
    return;
  }
  let arrOfEmpty = [];
  let newMatrix = JSON.parse(JSON.stringify(matrix));
  for (let row = 0; row < newMatrix.length; row++) {
    for (let cell = 0; cell < newMatrix[row].length; cell++) {
      if (!newMatrix[row][cell].value)
        arrOfEmpty = [...arrOfEmpty, newMatrix[row][cell]];
    }
  }
  return arrOfEmpty;
};
