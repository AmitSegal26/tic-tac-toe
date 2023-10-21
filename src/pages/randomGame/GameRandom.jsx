import { Box, Button, Container, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SquaresComp from "./SquaresComp";
import COLORS from "../../utils/COLORS";
import { randomBot } from "../../bot/randomBot";
import SIGNS from "../../utils/USERSSIGNS";
import { checkIfWin } from "../../functions/checkIfWin";
import GameIntro from "../../components/navbar/GameIntro";
import { handleReset } from "../../functions/resetGameState";
import smartBot from "../../bot/smartBot";
import { emptyBoardMatrix } from "../../utils/emptyBoardMatrix";
import smartestBot from "../../bot/smartestBot";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
const Game = () => {
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
  //* true - is X, false - is O
  const [matrixXO, setMatrixXO] = useState(emptyBoardMatrix);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (checkIfWin(matrixXO, setVictoryOpt) || isTie) {
      setIsGameEnd(true);
    }
  }, [matrixXO, turnOfX, isTie]);
  const rulesArr = [
    "The game is played agains a bot, each turn the bot puts his mark in a random cell",
    "Each player has his turn to choose, 1 choice for each player for each turn",
    'Once a player has chosen his spot, the turn passes to the next player and there are no "go-backs"!',
    "The goal can be as a row, a column or even a diagonal line",
  ];
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
    //!checking if this was the last move for the ternary condition on setMatrixXO(.....)
    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < newMatrix[i].length; j++) {
        if (newMatrix[i][j].value === "") {
          isLastMove = false;
        }
      }
    }
    setIsTie(isLastMove);
    setMatrixXO(
      isLastMove
        ? newMatrix
        : gameMode === 2
        ? smartestBot(newMatrix)
        : gameMode === 1
        ? smartBot(newMatrix)
        : randomBot(newMatrix)
    );
    setTurnOfX(!turnOfX);
  };
  const handleResetClick = () => {
    handleReset(setMatrixXO, setVictoryOpt, setTurnOfX, setIsGameEnd, setIsTie);
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
  const btnStyleObj = { p: 3, m: 2, fontSize: "2rem", borderRadius: "50px" };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: start ? { xs: "column", lg: "row" } : "column",
      }}
    >
      <GameIntro
        welcomeText="Welcome to the game - RANDOM MODE!"
        rulesArr={rulesArr}
      />
      {isGameEnd || isTie ? (
        <Box sx={{ p: 1, m: 2, height: "70px", alignSelf: "center" }}>
          <Tooltip title="reset game">
            <Button variant="contained" onClick={handleResetClick}>
              <RestartAltIcon />
            </Button>
          </Tooltip>
        </Box>
      ) : (
        ""
      )}
      {start ? (
        <Box
          component="div"
          sx={{
            transition: "background-color 1s linear",
            backgroundColor: isGameEnd ? "#1f1f1f" : "",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            m: 3,
          }}
        >
          <Typography color="error" component="h4" variant="h4">
            {gameMode === 0
              ? "Random"
              : gameMode === 1
              ? "Smart Bot"
              : gameMode === 2
              ? "Smartest Bot"
              : "UNKNOWN"}{" "}
            Mode
          </Typography>
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
          <Button
            variant="contained"
            color="secondary"
            onClick={handleChangeModeClick}
          >
            Change Game Mode
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={btnStyleObj}
            color="secondary"
            variant="contained"
            onClick={setRandomMode}
          >
            START Random Mode
          </Button>
          <Button
            sx={btnStyleObj}
            color="warning"
            variant="contained"
            onClick={setSmartMode}
            // disabled
          >
            START Smart Mode [not done yet]
          </Button>
          <Button
            sx={btnStyleObj}
            color="primary"
            variant="contained"
            onClick={setSmartestMode}
            // disabled
          >
            START Smartest Mode [not done yet]
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Game;
