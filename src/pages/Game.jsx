import { Button, Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SquaresComp from "../components/game/board/SquaresComp";
import { checkIfWin } from "../functions/checkIfWin";
import GameIntro from "../components/game/GameIntro";
import { handleReset } from "../functions/resetGameState";
import { dict } from "../utils/dict";
import TurnAndWinIndicator from "../components/game/TurnAndWinIndicator";
import BoardWrapper from "../components/game/BoardWrapper";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import scrollToBoard from "../functions/scrollToBoard";
const { SIGNS } = dict;
const { emptyBoardMatrix } = dict;
const Game = () => {
  const boardRef = useRef();
  const navigate = useNavigate();
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
  const [turnOfX, setTurnOfX] = useState(false);
  //* true - is X, false - is O
  const [matrixXO, setMatrixXO] = useState(emptyBoardMatrix);
  const [start, setStart] = useState(false);
  useEffect(() => {
    scrollToBoard(boardRef);
  }, [start]);
  useEffect(() => {
    setTurnOfX(!turnOfX);
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
      if (cell.value !== "" && cell.index === id) {
        return;
      }
      if (cell.index === id) {
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
  };
  const handleResetClick = () => {
    handleReset(
      setMatrixXO,
      setVictoryOpt,
      setTurnOfX,
      setIsGameEnd,
      setIsTie,
      turnOfX
    );
  };
  const handleChangeMode = () => {
    navigate(ROUTES.BOT);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: start ? { xs: "column", lg: "row" } : "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GameIntro welcomeText="Welcome to the game!" rulesArr={rulesArr} />
      {start ? (
        <BoardWrapper
          boardRef={boardRef}
          isGameEndProp={isGameEnd}
          handleResetClickFunc={handleResetClick}
          handleChangeModeClickFunc={handleChangeMode}
        >
          <TurnAndWinIndicator
            isTie={isTie}
            isGameEnd={isGameEnd}
            turnOfX={turnOfX}
          />
          <SquaresComp
            sizeOfBoard={dict.sizeOfBoard}
            isGameEndProp={isGameEnd}
            handleClickFunc={clickOfCell}
            matrixValue={matrixXO}
            victoryOptProp={victoryOpt}
          />
        </BoardWrapper>
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
