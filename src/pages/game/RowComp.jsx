import { Box, Typography } from "@mui/material";
import React from "react";
import COLORS from "../../utils/COLORS";

const RowComp = ({ i, handleClickFunc, matrixValue }) => {
  const rowStyleObj = { width: "fit-content", display: "flex" };
  const cellStyleObj = {
    width: "10vw",
    height: "10vw",
    border: "3px solid black",
    transition: "all 0.1s linear",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3em",
    ":hover": { backgroundColor: COLORS.WHITE },
  };
  return (
    <Box component="div" sx={rowStyleObj}>
      {[undefined, undefined, undefined].map((item, j) => (
        <Box
          key={`${j}+${i}`}
          id={i * 3 + (j + 1)}
          onClick={handleClickFunc}
          component="div"
          sx={cellStyleObj}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: COLORS.TEXT2,
              backgroundColor: COLORS.MAIN,
            }}
          >
            {matrixValue[i][j].value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default RowComp;
