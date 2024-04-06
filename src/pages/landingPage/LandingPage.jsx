import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import img from "../../assets/imgs/logoTransparent.png";
import localGamePic from "../../assets/imgs/buttonsHomePage/tic-tac-toe-local.jpeg";
import onlineGamePic from "../../assets/imgs/buttonsHomePage/online-game.jpeg";
import botGamePic from "../../assets/imgs/buttonsHomePage/bot-game.png";
import welcomePic from "../../assets/imgs/buttonsHomePage/welcome.jpg";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { dict } from "./../../utils/dict";
import { useDispatch } from "react-redux";
import { pressedOn } from "../../store/contactSlice";
import AboutAndHomeBtn from "../../components/AboutAndHomeBtn";
import "./landingPage.css";

const TYPES = [
  { link: "GAME", title: "Play Local 1v1 Game" },
  { link: "REGISTER", title: "Create an account" },
  { link: "CONTACT", title: "Contact The Creator" },
  { link: "BOT", title: "Play against the bot" },
  { link: "ONLINE", title: "Play online" },
];
const GridBox = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    if (type === TYPES[2]) {
      dispatch(pressedOn());
      return;
    }
    window.scrollTo({ top: 0 });
    navigate(ROUTES[type?.link || ROUTES.HOME]);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        color: dict.COLORS.WHITE,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: "1.5/1",
        width: "400px",
        borderRadius: "30px",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        backgroundColor: dict.COLORS.TEXT1,
        boxShadow: `2px 5px 20px 3px ${dict.COLORS.BLACK}`,
        transition: "all 0.2s ease-in",
        ":hover": { transform: "scale(1.1)" },
        ":before": {
          opacity: "0.4",
          zIndex: 0,
          position: "absolute",
          content: '""',
          width: "100%",
          height: "100%",
          backgroundImage: `url(${
            type === TYPES[0]
              ? localGamePic
              : type === TYPES[1]
              ? welcomePic
              : type === TYPES[3]
              ? botGamePic
              : type === TYPES[4]
              ? onlineGamePic
              : img
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
      }}
    >
      <Typography
        sx={{
          zIndex: 1,
          fontWeight: "bold",
          fontSize: "1.5rem",
          letterSpacing: "0.1rem",
        }}
      >
        {type?.title}
      </Typography>
    </Box>
  );
};

const LandingPage = () => {
  const objStyleForGridItem = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <Fragment>
      {/* banner */}
      <Box component="div" className="banner">
        <Typography gutterBottom component="h1" sx={{ fontFamily: "manrope" }}>
          Welcome to <br />
          Tic-Tac-Toe
        </Typography>
      </Box>
      {/* menu */}
      <Grid
        container
        columns={4}
        rowSpacing={10}
        columnSpacing={2}
        sx={{ p: 10 }}
      >
        <AboutAndHomeBtn text="Where am I? 👆" />
        {TYPES.map((type) => (
          <Grid
            key={type.link}
            item
            xs={4}
            sm={2}
            lg={1}
            sx={objStyleForGridItem}
          >
            <GridBox type={type} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
export default LandingPage;
