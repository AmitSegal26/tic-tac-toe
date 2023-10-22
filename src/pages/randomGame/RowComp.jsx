import { Box, Typography } from "@mui/material";
import React from "react";
import COLORS from "../../utils/COLORS";

const RowComp = ({
  i,
  handleClickFunc,
  matrixValue,
  isGameEndProp,
  victoryOptProp,
}) => {
  const rowStyleObj = { width: "fit-content", display: "flex" };
  const cellStyleObj = {
    width: "10vw",
    height: "10vw",
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
  return (
    <Box component="div" sx={rowStyleObj}>
      {[undefined, undefined, undefined].map((item, j) => (
        <Box
          key={`${j}+${i}`}
          id={i * 3 + (j + 1)}
          onClick={isGameEndProp ? () => {} : handleClickFunc}
          component="div"
          sx={cellStyleObj}
        >
          <Typography
            sx={{
              ...valueStyleObj,
              color:
                victoryOptProp === 1 && i === 0
                  ? "white"
                  : victoryOptProp === 2 && i === 1
                  ? "white"
                  : victoryOptProp === 3 && i === 2
                  ? "white"
                  : victoryOptProp === 4 && j === 0
                  ? "white"
                  : victoryOptProp === 5 && j === 1
                  ? "white"
                  : victoryOptProp === 6 && j === 2
                  ? "white"
                  : victoryOptProp === 7 && i === j
                  ? "white"
                  : victoryOptProp === 8 && i + j === 2
                  ? "white"
                  : COLORS.TEXT2,
            }}
          >
            {/* [{i},{j}] */}
            {matrixValue[i][j].value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default RowComp;
