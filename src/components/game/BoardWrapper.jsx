import React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { dict } from "../../utils/dict";

const BoardWrapper = ({
  boardRef,
  children,
  isGameEndProp,
  handleChangeModeClickFunc,
  handleResetClickFunc,
}) => {
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
      {children}
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
