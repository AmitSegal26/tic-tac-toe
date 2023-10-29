import { Box } from "@mui/material";
import React from "react";
import RowComp from "./RowComp";

const SquaresComp = ({
  handleClickFunc,
  matrixValue,
  isGameEndProp,
  victoryOptProp,
  sizeOfBoard,
}) => {
  return (
    <Box sx={{ height: sizeOfBoard, width: sizeOfBoard }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          mb: 3,
          width: "100%",
          height: "100%",
        }}
      >
        {[undefined, undefined, undefined].map((item, i) => (
          <RowComp
            key={i}
            handleClickFunc={handleClickFunc}
            i={i}
            matrixValue={matrixValue}
            isGameEndProp={isGameEndProp}
            victoryOptProp={victoryOptProp}
          />
        ))}
      </Box>
    </Box>
  );
};

SquaresComp.defaultProps = {
  sizeOfBoard: "40vh",
};

export default SquaresComp;
