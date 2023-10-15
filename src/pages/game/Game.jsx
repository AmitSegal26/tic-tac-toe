import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SquaresComp from "./SquaresComp";
import COLORS from "../../utils/COLORS";
import SIGNS from "../../utils/USERSSIGNS";
import { checkIfWin } from "../../functions/checkIfWin";
import GameIntro from "../../components/navbar/GameIntro";
import { emptyBoardMatrix } from "../../utils/emptyBoardMatrix";
import { handleReset } from "../../functions/resetGameState";

const Game = () => {
  const [turnOfX, setTurnOfX] = useState(true);
  const [isTie, setIsTie] = useState(false);
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
  const [matrixXO, setMatrixXO] = useState(emptyBoardMatrix);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (checkIfWin(matrixXO, setVictoryOpt)) {
      setIsGameEnd(true);
    }
  }, [matrixXO]);
  const rulesArr = [
    "Each player has his turn to choose, 1 choice for each player for each turn",
    'Once a player has chosen his spot, the turn passes to the next player and there are no "go-backs"!',
    "The goal can be as a row, a column or even a diagonal line",
  ];
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
      if (cell.value !== "" && cell.index == id) {
        return;
      }
      if (cell.index == id) {
        newMatrix[row][newMatrix[row].indexOf(cell)].value = turnOfX
          ? SIGNS.X
          : SIGNS.O;
      }
    } //!checking if this was the last move for the ternary condition on line 92
    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < newMatrix[i].length; j++) {
        if (newMatrix[i][j].value === "") {
          isLastMove = false;
        }
      }
    }
    setIsTie(isLastMove);
    setMatrixXO(newMatrix);
    setTurnOfX(!turnOfX);
  };
  const handleResetClick = () => {
    handleReset(setMatrixXO, setVictoryOpt, setTurnOfX, setIsGameEnd, setIsTie);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: start ? { xs: "column", lg: "row" } : "column",
      }}
    >
      <GameIntro welcomeText="Welcome to the game!" rulesArr={rulesArr} />
      {isGameEnd || isTie ? (
        <Button
          sx={{ p: 1, m: 2, height: "70px", alignSelf: "center" }}
          variant="contained"
          onClick={handleResetClick}
        >
          Reset game
        </Button>
      ) : (
        ""
      )}
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
            {isTie
              ? "Its A Tie!"
              : isGameEnd
              ? turnOfX
                ? SIGNS.O
                : SIGNS.X
              : turnOfX
              ? SIGNS.X
              : SIGNS.O}
            {isTie ? "" : "'s"} {isTie ? "" : isGameEnd ? "Victory!" : "Turn"}
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
          sx={{ p: 3, m: 2, fontSize: "2rem" }}
          color="secondary"
          variant="contained"
          onClick={handleStart}
        >
          START 2 players mode
        </Button>
      )}
    </Container>
  );
};

export default Game;
