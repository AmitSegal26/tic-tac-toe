import { Typography } from "@mui/material";
import React from "react";
import { dict } from "../../utils/dict";
const { COLORS } = dict;
const { SIGNS } = dict;
const TurnAndWinIndicator = ({ isTie, isGameEnd, turnOfX }) => {
  return (
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
  );
};

export default TurnAndWinIndicator;
