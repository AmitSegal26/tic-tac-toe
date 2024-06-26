import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { dict } from "../../../utils/dict";
import imgOfBot from "../../../assets/imgs/bot-expressions/new-robot-sign.png";
const { COLORS } = dict;
const { SIGNS } = dict;
const RowComp = ({
  i,
  handleClickFunc,
  matrixValue,
  isGameEndProp,
  victoryOptProp,
  gameModeProp,
  isBotThinking,
  variation,
  isPhoneModeFlash,
}) => {
  const rowStyleObj = {
    width: "100%",
    height: "100%",
    display: "flex",
  };
  const cellStyleObj = {
    width: "100%",
    height: "100%",
    border: "3px solid black",
    transition: "all 0.1s linear",
    cursor: isGameEndProp || isBotThinking ? "default" : "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3em",
    ":hover":
      isGameEndProp || isBotThinking ? "" : { backgroundColor: COLORS.WHITE },
  };
  const valueStyleObj = {
    fontWeight: "bold",
    fontSize: "3rem",
  };
  const setTextColorOfWin = (txtColor = "white", j) => {
    return j !== null && j !== undefined
      ? victoryOptProp === 1 && i === 0
        ? txtColor
        : victoryOptProp === 2 && i === 1
        ? txtColor
        : victoryOptProp === 3 && i === 2
        ? txtColor
        : victoryOptProp === 4 && j === 0
        ? txtColor
        : victoryOptProp === 5 && j === 1
        ? txtColor
        : victoryOptProp === 6 && j === 2
        ? txtColor
        : victoryOptProp === 7 && i === j
        ? txtColor
        : victoryOptProp === 8 && i + j === 2
        ? txtColor
        : COLORS.TEXT2
      : txtColor;
  };
  const setBgColorOfWin = (bgColor = "transparent", j) => {
    return j !== null && j !== undefined
      ? victoryOptProp === 1 && i === 0
        ? bgColor
        : victoryOptProp === 2 && i === 1
        ? bgColor
        : victoryOptProp === 3 && i === 2
        ? bgColor
        : victoryOptProp === 4 && j === 0
        ? bgColor
        : victoryOptProp === 5 && j === 1
        ? bgColor
        : victoryOptProp === 6 && j === 2
        ? bgColor
        : victoryOptProp === 7 && i === j
        ? bgColor
        : victoryOptProp === 8 && i + j === 2
        ? bgColor
        : COLORS.BOARDBG
      : bgColor;
  };
  return (
    <Box component="div" sx={rowStyleObj}>
      {[undefined, undefined, undefined].map((item, j) => (
        <Box
          key={`${j}+${i}`}
          id={i * 3 + (j + 1)}
          onClick={
            matrixValue[i][j].value || isGameEndProp || isBotThinking
              ? () => {}
              : handleClickFunc
          }
          component="div"
          sx={{
            ...cellStyleObj,
            backgroundColor:
              isPhoneModeFlash && !isGameEndProp
                ? COLORS.BOARDBG
                : variation === 50 && !isGameEndProp
                ? COLORS.TEXT2
                : variation === 100 &&
                  !matrixValue[i][j].value &&
                  !isGameEndProp
                ? "#5E8C3A"
                : setBgColorOfWin(COLORS.RED, j),
          }}
        >
          {gameModeProp === 1 &&
          variation === 0 &&
          matrixValue[i][j].value === SIGNS.O ? (
            <Avatar src={imgOfBot} sx={{ width: "80%", height: "80%" }} />
          ) : (
            <Typography
              sx={{
                ...valueStyleObj,
                color: setTextColorOfWin("white", j),
              }}
            >
              {!isGameEndProp && variation === 100
                ? ""
                : matrixValue[i][j].value}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default RowComp;
