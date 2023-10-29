import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ROUTES from "../../routes/ROUTES";
import { useNavigate } from "react-router-dom";

const ModeMenu = ({
  setRandomModeFunc,
  setSmartModeFunc,
  setSmartestModeFunc,
}) => {
  const theme = useTheme();
  const mediaQ = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const btnStyleObj = {
    p: 0.5,
    m: 0.5,
    fontSize: mediaQ ? "1rem" : "2rem",
    borderRadius: "50px",
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplate: "repeat(2,1fr) / repeat(2,1fr)",
      }}
    >
      <Button
        sx={btnStyleObj}
        color="secondary"
        variant="contained"
        onClick={setRandomModeFunc}
      >
        START Normal Mode
      </Button>
      <Button
        sx={btnStyleObj}
        color="warning"
        variant="contained"
        onClick={setSmartModeFunc}
        // disabled
      >
        START Hard Mode
      </Button>
      <Button
        sx={btnStyleObj}
        color="error"
        variant="contained"
        onClick={setSmartestModeFunc}
        disabled
      >
        START Nightmare Mode [not done yet]
      </Button>
      <Button
        sx={btnStyleObj}
        color="primary"
        variant="contained"
        onClick={() => {
          navigate(ROUTES.GAME);
        }}
      >
        Local 2 players game
      </Button>
    </Box>
  );
};

export default ModeMenu;
