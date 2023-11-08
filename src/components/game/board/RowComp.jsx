import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { dict } from "../../../utils/dict";
import imgOfBot from "../../../assets/imgs/bot-expressions/bot-mad.bmp";
const { COLORS } = dict;
const { SIGNS } = dict;
const RowComp = ({
  i,
  handleClickFunc,
  matrixValue,
  isGameEndProp,
  victoryOptProp,
  gameModeProp,
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
    cursor: isGameEndProp ? "default" : "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3em",
    ":hover": isGameEndProp ? "" : { backgroundColor: COLORS.WHITE },
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
          onClick={isGameEndProp ? () => {} : handleClickFunc}
          component="div"
          sx={{
            ...cellStyleObj,
            backgroundColor: setBgColorOfWin(COLORS.RED, j),
          }}
        >
          {gameModeProp === 1 && matrixValue[i][j].value === SIGNS.O ? (
            <Avatar src={imgOfBot} sx={{ width: "80%", height: "80%" }} />
          ) : (
            <Typography
              sx={{
                ...valueStyleObj,
                color: setTextColorOfWin("white", j),
              }}
            >
              {matrixValue[i][j].value}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default RowComp;
