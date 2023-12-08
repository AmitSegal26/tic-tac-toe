import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import RowComp from "./RowComp";

const SquaresComp = ({
  handleClickFunc,
  matrixValue,
  isGameEndProp,
  victoryOptProp,
  sizeOfBoard,
  gameModeProp,
  isBotThinking,
  variation,
  mediaQ,
}) => {
  const [isPhoneDarkModeBoardFlash, setIsPhoneDarkModeBoardFlash] =
    useState(false);
  useEffect(() => {
    const flashBoardInterval = setInterval(() => {
      setIsPhoneDarkModeBoardFlash(true);
      setTimeout(() => {
        setIsPhoneDarkModeBoardFlash(false);
      }, 100);
    }, 4000);
    if (!(mediaQ && variation === 50)) {
      clearInterval(flashBoardInterval);
    }
    return () => {
      clearInterval(flashBoardInterval);
    };
  }, [mediaQ, variation]);
  const alternateSizeOfBoard = "250px";
  return (
    <Box
      sx={{
        height: { xs: alternateSizeOfBoard, md: sizeOfBoard },
        width: { xs: alternateSizeOfBoard, md: sizeOfBoard },
      }}
    >
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
            variation={variation}
            isPhoneModeFlash={isPhoneDarkModeBoardFlash}
            key={i}
            isBotThinking={isBotThinking}
            handleClickFunc={handleClickFunc}
            i={i}
            matrixValue={matrixValue}
            isGameEndProp={isGameEndProp}
            victoryOptProp={victoryOptProp}
            gameModeProp={gameModeProp}
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
