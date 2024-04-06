import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ROUTES from "../routes/ROUTES";
import { dict } from "../utils/dict";
const AboutAndHomeBtn = ({ text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.location.href.split("/")[3] === "about"
      ? navigate(ROUTES.HOME)
      : navigate(ROUTES.ABOUT);
  };
  return (
    <Fragment>
      <Grid item xs={1} />
      <Grid item xs={1}>
        <Box
          onClick={handleClick}
          sx={{
            cursor: "pointer",
            border: `2px solid ${dict.COLORS.RED}`,
            borderRadius: 4,
            backgroundColor: dict.COLORS.WHITE,
            letterSpacing: "0.2rem",
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.25s all ease-in-out",
            p: 5,
            ":hover": {
              backgroundColor: dict.COLORS.RED,
            },
          }}
        >
          {text}
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Fragment>
  );
};

export default AboutAndHomeBtn;
