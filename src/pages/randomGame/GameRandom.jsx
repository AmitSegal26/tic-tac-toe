import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SquaresComp from "./SquaresComp";
import COLORS from "../../utils/COLORS";
import { randomBot } from "../../bot/randomBot";
import SIGNS from "../../utils/USERSSIGNS";
import { checkIfWin } from "../../functions/checkIfWin";
const Game = () => {
  const [turnOfX, setTurnOfX] = useState(true);
  const [victoryOpt, setVictoryOpt] = useState(0);
  /*
   *1- top row
   *2- middle row
   *3- bottom row
   *4- left column
   *5- middle column
   *6- right column
   *7- top-left to bottom-right diagonal line \
   *8- bottom-left to top-right diagonal line /
   */
  const [isGameEnd, setIsGameEnd] = useState(false);
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
  useEffect(() => {
    if (checkIfWin(matrixXO, setVictoryOpt)) {
      setIsGameEnd(true);
    } else {
      setTurnOfX(true);
    }
  }, [matrixXO]);
  const handleStart = () => {
    setStart(true);
  };
  const clickOfCell = (e) => {
    if (!e) {
      return;
    }
    if (!e.target) {
      return;
    }
    if (!e.target.id) {
      return;
    }
    let { id } = e.target;
    id = +id;
    const row =
      (id / 3) % 1 === 0 ? Math.floor(id / 3) - 1 : Math.floor(id / 3);
    const newMatrix = JSON.parse(JSON.stringify(matrixXO));
    let isLastMove = true;
    for (const cell of newMatrix[row]) {
      if (cell.value !== "" && cell.index === id) {
        //? is the cell already occupied
        return;
      }
      if (cell.index === id) {
        newMatrix[row][newMatrix[row].indexOf(cell)].value = SIGNS.X;
      }
    }
    //!checking if this was the last move for the ternary condition on line 92
    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < newMatrix[i].length; j++) {
        if (newMatrix[i][j].value === "") {
          isLastMove = false;
        }
      }
    }
    setMatrixXO(isLastMove ? newMatrix : randomBot(newMatrix));
    setTurnOfX(!turnOfX);
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
          Welcome to the game - RANDOM MODE!
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
            The game is played agains a bot, each turn the bot puts his mark in
            a random cell
          </ListItem>
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
        <Box
          component="div"
          sx={{
            transition: "all 1s linear",
            backgroundColor: isGameEnd ? "#1f1f1f" : "",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            m: 3,
          }}
        >
          <Typography
            component="h4"
            variant="h4"
            sx={{ color: isGameEnd ? "white" : COLORS.TEXT2 }}
          >
            {isGameEnd
              ? turnOfX
                ? SIGNS.O
                : SIGNS.X
              : turnOfX
              ? SIGNS.X
              : SIGNS.O}
            's {isGameEnd ? "Victory!" : "Turn"}
          </Typography>
          <SquaresComp
            isGameEndProp={isGameEnd}
            handleClickFunc={clickOfCell}
            matrixValue={matrixXO}
            victoryOptProp={victoryOpt}
          />
        </Box>
      ) : (
        <Button
          sx={{ p: 3, m: 2 }}
          color="secondary"
          variant="contained"
          onClick={handleStart}
        >
          START Random Mode
        </Button>
      )}
    </Container>
  );
};

export default Game;
