import { Container } from "@mui/material";
import React from "react";
import RowComp from "./RowComp";

const SquaresComp = ({
  handleClickFunc,
  matrixValue,
  isGameEndProp,
  victoryOptProp,
}) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
        mb: 3,
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
    </Container>
  );
};

export default SquaresComp;
