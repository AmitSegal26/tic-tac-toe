import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SquaresComp from "./SquaresComp";
import COLORS from "../../utils/COLORS";

const Game = () => {
  const [turnOfX, setturnOfX] = useState(true);
  //* true - is X, false - is O
  const [matrixXO, setMatrixXO] = useState([
    [
      { index: 1, value: "" },
      { index: 2, value: "" },
      { index: 3, value: "" },
    ],
    [
      { index: 4, value: "" },
      { index: 5, value: "" },
      { index: 6, value: "" },
    ],
    [
      { index: 7, value: "" },
      { index: 8, value: "" },
      { index: 9, value: "" },
    ],
  ]);
  const [start, setStart] = useState(false);
  const handleStart = () => {
    setStart(true);
  };
  const checkIfWin = (matrix) => {};
  const clickOfCell = (e) => {
    if (!e) {
      return;
    }
    if (!e.target) {
      return;
    }
    let { id } = e.target;
    id = +id;
    const row =
      (id / 3) % 1 === 0 ? Math.floor(id / 3) - 1 : Math.floor(id / 3);
    const newMatrix = JSON.parse(JSON.stringify(matrixXO));
    for (const cell of newMatrix[row]) {
      if (cell.value !== "" && cell.index == id) {
        return;
      }
      if (cell.index == id) {
        newMatrix[row][newMatrix[row].indexOf(cell)].value = turnOfX
          ? "X"
          : "O";
      }
    }
    setMatrixXO(newMatrix);
    setturnOfX(!turnOfX);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: start ? { xs: "column", lg: "row" } : "column",
      }}
    >
      <Box component="div">
        <Typography component="h1" variant="h1">
          Welcome to the game!
        </Typography>
        <Divider />
        <Typography component="h3" variant="h2">
          The rules are simple really:
        </Typography>

        <Divider />
        <Typography component="h3" variant="h3">
          The goal: to get your shape into 3 adjacent cells.
        </Typography>
        <hr />
        <List
          component="h3"
          variant="h4"
          sx={{ backgroundColor: COLORS.WHITE, borderRadius: "30px" }}
        >
          <ListItem>
            <b> rule no. 1:</b> Each player has his turn to choose, 1 choice for
            each player for each turn
          </ListItem>
          <ListItem>
            <b> rule no. 2:</b> Once a player has chosen his spot, the turn
            passes to the next player and there are no "go-backs"!
          </ListItem>
          <ListItem>
            <b> rule no. 3:</b> The goal can be as a row, a column or even a
            diagonal line
          </ListItem>
          <ListItem>
            <b> no. 4:</b>rule Have fun!
          </ListItem>
        </List>
      </Box>
      {start ? (
        <Box component="div">
          <Typography component="h4" variant="h4">
            {turnOfX ? "X" : "O"}'s Turn
          </Typography>
          <SquaresComp handleClickFunc={clickOfCell} matrixValue={matrixXO} />
        </Box>
      ) : (
        <Button
          sx={{ p: 3, m: 2 }}
          color="secondary"
          variant="contained"
          onClick={handleStart}
        >
          START
        </Button>
      )}
    </Container>
  );
};

export default Game;
