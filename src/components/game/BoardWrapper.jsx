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

const SliderMarkSpan = ({ children }) => {
  return (
    <Box
      component="span"
      sx={{
        color: dict.COLORS.WHITE,
        fontWeight: "bold",
        letterSpacing: "0.1rem",
        textShadow: `${dict.COLORS.BLACK} 0 0 5px`,
        transition: "all 0.4s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};
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
  const handleVariationChange = (e) => {
    if (!e) return;
    if (!e.target) return;
    const { value } = e.target;
    setVariationState(value);
  };
  return (
    <Box
      ref={boardRef}
      component="div"
      sx={{
        transition: "background-color 1s linear",
        backgroundColor: isGameEndProp ? dict.COLORS.TEXT1 : "",
        display: "flex",
        gap: "2rem",
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
          <SliderMarkSpan>
            {variationState === 100
              ? "Blind Mode"
              : variationState === 50
              ? "Dark Mode"
              : "Normal Mode"}
          </SliderMarkSpan>
          <Slider
            onChange={handleVariationChange}
            defaultValue={variationState}
            step={50}
            marks={[
              {
                value: 0,
                label: <SliderMarkSpan>Normal</SliderMarkSpan>,
              },
              {
                value: 50,
                label: <SliderMarkSpan>Dark Mode</SliderMarkSpan>,
              },
              {
                value: 100,
                label: <SliderMarkSpan>Blind Mode</SliderMarkSpan>,
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
            mediaQ={mediaQ}
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
              onChange={handleVariationChange}
              orientation={mediaQ ? "vertical" : "horizontal"}
              defaultValue={variationState}
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
