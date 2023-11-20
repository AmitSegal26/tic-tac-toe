import React, { useState } from "react";
import {
  Box,
  Button,
  Tooltip,
  Slider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { dict } from "../../utils/dict";
import TurnAndWinIndicator from "./TurnAndWinIndicator";
import SquaresComp from "./board/SquaresComp";

const BoardWrapper = ({
  boardRef,
  children,
  isGameEndProp,
  handleChangeModeClickFunc,
  handleResetClickFunc,
  handleClickFunc,
  matrixValue,
  victoryOptProp,
  isTie,
  turnOfX,
  gameModeProp,
  isBotThinking,
}) => {
  const theme = useTheme();
  const mediaQ = useMediaQuery(theme.breakpoints.down("md"));
  const [variationState, setVariationState] = useState(0);
  const radiusOfBtn = { borderRadius: "50px" };
  return (
    <Box
      ref={boardRef}
      component="div"
      sx={{
        transition: "background-color 1s linear",
        backgroundColor: isGameEndProp ? dict.COLORS.TEXT1 : "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25px",
        width: "fit-content",
        height: "fit-content",
        p: 5,
      }}
    >
      {mediaQ ? (
        ""
      ) : (
        <Box sx={{ width: 300, height: 50 }}>
          {variationState}
          <Slider
            orientation={mediaQ ? "vertical" : "horizontal"}
            onChange={(e) => {
              if (!e) return;
              if (!e.target) return;
              const { value } = e.target;
              setVariationState(value);
            }}
            defaultValue={0}
            step={50}
            marks={[
              {
                value: 0,
                label: "Normal",
              },
              {
                value: 50,
                label: "Dark Mode",
              },
              {
                value: 100,
                label: "Blind Mode",
              },
            ]}
          />
        </Box>
      )}
      {children}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <TurnAndWinIndicator
            isTie={isTie}
            isGameEnd={isGameEndProp}
            turnOfX={turnOfX}
            gameMode={gameModeProp}
            botThinking={isBotThinking || false}
          />
          <SquaresComp
            variation={variationState}
            isBotThinking={isBotThinking || false}
            gameModeProp={gameModeProp}
            sizeOfBoard={dict.sizeOfBoard}
            isGameEndProp={isGameEndProp}
            handleClickFunc={handleClickFunc}
            matrixValue={matrixValue}
            victoryOptProp={victoryOptProp}
          />
        </Box>
        {mediaQ ? (
          <Box sx={{ width: 50, height: 300 }}>
            <Slider
              orientation={mediaQ ? "vertical" : "horizontal"}
              defaultValue={0}
              step={50}
              marks={[
                {
                  value: 0,
                  label: "Normal",
                },
                {
                  value: 50,
                  label: "Dark Mode",
                },
                {
                  value: 100,
                  label: "Blind Mode",
                },
              ]}
            />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 5,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleChangeModeClickFunc}
          sx={radiusOfBtn}
        >
          Change Game Mode
        </Button>
        <Tooltip title="reset game">
          <Button
            variant="contained"
            onClick={handleResetClickFunc}
            sx={radiusOfBtn}
          >
            <RestartAltIcon />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default BoardWrapper;
