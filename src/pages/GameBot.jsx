import { Container, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { randomBot } from "../bot/randomBot";
import { checkIfWin } from "../functions/checkIfWin";
import GameIntro from "../components/game/GameIntro";
import { handleReset } from "../functions/resetGameState";
import smartBot from "../bot/smartBot";
import smartestBot from "../bot/smartestBot";
import { dict } from "../utils/dict";
import ModeMenu from "../components/game/ModeMenu";
import BoardWrapper from "../components/game/BoardWrapper";
import scrollToBoard from "../functions/scrollToBoard";
import { getRandomIntIn } from "../service/getRandomIntInlusive";
const { SIGNS } = dict;
const { emptyBoardMatrix } = dict;
const Game = () => {
  const boardRef = useRef();
  const [delayOfBot, setDelayOfBot] = useState(getRandomIntIn(500, 1500));
  const [gameMode, setGameMode] = useState(null);
  /*
   * 0 - random mode
   * 1 - smart mode
   * 2 - smartest mode
   */
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
  const [isLastMove, setIsLastMove] = useState(false);
  const [botThinking, setBotThinking] = useState(false);
  //* true - is X, false - is O
  const [matrixXO, setMatrixXO] = useState(emptyBoardMatrix);
  const [start, setStart] = useState(false);
  useEffect(() => {
    scrollToBoard(boardRef);
  }, [start]);
  useEffect(() => {
    setDelayOfBot(getRandomIntIn(200, 1500));
    if (checkIfWin(matrixXO, setVictoryOpt) || isTie) {
      setIsGameEnd(true);
      return;
    }
  }, [matrixXO, turnOfX, isTie]);
  useEffect(() => {
    setIsTie(!checkIfWin(matrixXO, () => {}) && isLastMove);
  }, [isLastMove]);
  useEffect(() => {
    if (botThinking) {
      setTimeout(() => {
        setBotThinking(false);
      }, delayOfBot);
    }
  }, [botThinking]);
  const rulesArr = [
    "The game is played against a bot, each turn the bot puts his mark in a random cell",
    "Each player has his turn to choose, 1 choice for each player for each turn",
    'Once a player has chosen his spot, the turn passes to the next player and there are no "go-backs"!',
    "The goal can be as a row, a column or even a diagonal line",
  ];
  const clickOfCell = (e) => {
    setBotThinking(true);
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
    //!checking if this was the last move for the ternary condition on setMatrixXO(.....)
    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < newMatrix[i].length; j++) {
        if (newMatrix[i][j].value === "") {
          isLastMove = false;
        }
      }
    }
    setIsLastMove(isLastMove);
    setMatrixXO(newMatrix);
    setTurnOfX(false);
    setTimeout(() => {
      if (!checkIfWin(newMatrix, () => {})) {
        setMatrixXO(
          isLastMove
            ? newMatrix
            : gameMode === 2
            ? smartestBot(newMatrix)
            : gameMode === 1
            ? smartBot(newMatrix)
            : randomBot(newMatrix)
        );
        setTurnOfX(true);
      }
    }, delayOfBot);
  };
  const handleResetClick = () => {
    handleReset(
      setMatrixXO,
      setVictoryOpt,
      setTurnOfX,
      setIsGameEnd,
      setIsTie,
      true
    );
  };
  const setRandomMode = () => {
    setGameMode(0);
    setStart(true);
  };
  const setSmartMode = () => {
    setGameMode(1);
    setStart(true);
  };
  const setSmartestMode = () => {
    setGameMode(2);
    setStart(true);
  };
  const handleChangeModeClick = () => {
    handleResetClick();
    setStart(false);
  };
  return (
    <Container
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: start ? { xs: "column", lg: "row" } : "column",
      }}
    >
      <GameIntro
        welcomeText="Welcome to the game - RANDOM MODE!"
        rulesArr={rulesArr}
      />
      {start ? (
        <BoardWrapper
          boardRef={boardRef}
          isGameEndProp={isGameEnd}
          handleResetClickFunc={handleResetClick}
          handleChangeModeClickFunc={handleChangeModeClick}
          handleClickFunc={clickOfCell}
          matrixValue={matrixXO}
          victoryOptProp={victoryOpt}
          isTie={isTie}
          turnOfX={turnOfX}
          gameModeProp={gameMode}
          isBotThinking={botThinking}
        >
          <Typography
            sx={{ color: dict.COLORS.RED }}
            component="h4"
            variant="h4"
          >
            {gameMode === 0
              ? "Normal"
              : gameMode === 1
              ? "Hard"
              : gameMode === 2
              ? "Nightmare"
              : "UNKNOWN"}{" "}
            Mode
          </Typography>
        </BoardWrapper>
      ) : (
        <ModeMenu
          setRandomModeFunc={setRandomMode}
          setSmartModeFunc={setSmartMode}
          setSmartestModeFunc={setSmartestMode}
        />
      )}
    </Container>
  );
};

export default Game;
