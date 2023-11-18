import { Box, Typography } from "@mui/material";
import React from "react";
import { dict } from "../../utils/dict";
import botFaceThinking from "../../assets/imgs/bot-expressions/robot-look-down.png";
import botFaceResting from "../../assets/imgs/bot-expressions/new-robot-sign.png";
import botFaceTie from "../../assets/imgs/bot-expressions/robot-tie.png";
import botFaceWin from "../../assets/imgs/bot-expressions/robot-win.png";
import botFaceLose from "../../assets/imgs/bot-expressions/robot-lose.png";
const { COLORS } = dict;
const { SIGNS } = dict;
const TurnAndWinIndicator = ({
  isTie,
  isGameEnd,
  turnOfX,
  botThinking,
  gameMode,
}) => {
  const botResponses = {
    botDefault: { src: botFaceResting, alt: "resting face of the bot" },
    botFaceThinking: { src: botFaceResting, alt: "thinking bot" },
    botFaceTie: { src: botFaceTie, alt: "face of the bot representing a tie" },
    botFaceWin: {
      src: botFaceWin,
      alt: "face of the bot representing a loss of the user",
    },
    botFaceLose: {
      src: botFaceLose,
      alt: "face of the bot representing a loss of the bot",
    },
  };
  const getSimpleH4Element = (tieOrTurn, Ownership, victoryTurn) =>
    tieOrTurn + Ownership + " " + victoryTurn;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        component="h4"
        variant="h4"
        sx={{
          color: isGameEnd ? "white" : COLORS.TEXT2,
          mr: 3,
        }}
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
      {gameMode === 1 ? (
        <Box
          component="img"
          src={
            botThinking
              ? botResponses.botFaceThinking.src
              : isTie
              ? botResponses.botFaceTie.src
              : isGameEnd
              ? turnOfX
                ? botResponses.botFaceWin.src
                : botResponses.botFaceLose.src
              : botResponses.botDefault.src
          }
          alt={
            botThinking
              ? botResponses.botFaceThinking.alt
              : isTie
              ? botResponses.botFaceTie.alt
              : isGameEnd
              ? turnOfX
                ? botResponses.botFaceWin.alt
                : botResponses.botFaceLose.alt
              : botResponses.botDefault.alt
          }
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default TurnAndWinIndicator;
