import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ExpositionsGridBox from "./ExpositionsGridBox";
import variationsPic from "../../assets/imgs/About/variations_bar.png";
import robotPic from "../../assets/imgs/bot-expressions/new-robot-sign.png";
import boardPic from "../../assets/imgs/About/board.png";
import modeMenuPic from "../../assets/imgs/About/mode_menu.png";
import AboutAndHomeBtn from "../../components/AboutAndHomeBtn";

const About = () => {
  const styleTypographyBasicObj = { pt: 4, width: "40vw" };
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "center", paddingBlock: 2 }}
    >
      <Box
        sx={{
          pt: 4,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <Typography sx={styleTypographyBasicObj} component="h1" variant="h2">
          Welcome to my Tic Tac Toe game
        </Typography>
        {/* text */}
        <Typography sx={styleTypographyBasicObj}>
          My name is Amit Segal, and in order to express my skills and
          knowledge, I decided to make a game (not original, but known) that
          contains many skills of mine in programming.
        </Typography>
        <Typography sx={styleTypographyBasicObj}>
          So, this game as you already understand is the old-school classic game
          of Tic Tac Toe XO, But of course I had to change a few things.
          Starting with a normal 1V1 game to different difficulties against a
          bot and different variations of the game board!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ ...styleTypographyBasicObj, fontWeight: "bold" }}
            component="h3"
            variant="h3"
          >
            So, shall we get to details?
          </Typography>
          <ExpositionsGridBox
            imgAlt={"aaaa"}
            imgToRight={false}
            imgSrc={robotPic}
            paragraph="Let's talk Tic Tac Toe! Picture this: you and a friend facing off in a battle of wits on a 3x3 grid, marking Xs and Os in a race to claim victory. It's not just a game; it's a test of skill and strategy, filled with moments of anticipation and triumph. So grab a friend, dive in, and let the games begin! Tic Tac Toe awaits your next move."
          />
          <ExpositionsGridBox
            imgAlt={"aaaa"}
            imgToRight={true}
            imgSrc={variationsPic}
            paragraph="Let's delve into the captivating variations of Tic Tac Toe!
            First off, we have the quintessential Normal Mode, where players engage in the timeless battle of Xs and Os, aiming to secure victory with strategic placement.
            Next, brace yourself for Dark Mode! In this thrilling rendition, the cells cloak themselves in darkness, heightening anticipation until you hover over them with your mouse, revealing your next move in a dramatic flourish.
            Lastly, there's Blind Mode, where the board conceals the signs of players, leaving only the empty cells visible. Prepare for a strategic showdown as every move becomes a calculated risk, challenging your tactical prowess like never before.
            Whether you're a traditionalist seeking classic excitement or an adventurer craving innovative twists, Tic Tac Toe offers endless thrills for all who dare to play!"
          />
          <ExpositionsGridBox
            imgAlt={"board game example"}
            imgToRight={false}
            imgSrc={boardPic}
            paragraph="Play a round of Tic Tac Toe and let the nostalgia wash over you. With every move, relive the timeless fun of this classic game. Who will emerge victorious? It's all part of the excitement!"
          />
          <ExpositionsGridBox
            imgAlt={"game mode menu example"}
            imgToRight={true}
            imgSrc={modeMenuPic}
            paragraph="Let's explore the diverse modes of Tic Tac Toe! Begin with the classic Normal Mode, offering a casual and enjoyable experience suitable for players of all skill levels. If you're seeking a challenge, delve into Hard Mode, where you'll face off against a formidable opponent ready to test your strategic prowess. For the ultimate test of wit, Nightmare Mode awaits, featuring an opponent so sharp it'll keep you on your toes. And for those who prefer a more social experience, gather a friend for a thrilling 2-player local game, where every move sparks friendly competition and laughter. Whether you're in the mood for casual fun or intense battles of intellect, Tic Tac Toe has a mode to suit every taste and skill level."
          />
        </Box>
        <AboutAndHomeBtn text="Back to 🏠 Page" />
        {/* <Box
          onClick={() => {
            navigate(ROUTES.HOME);
          }}
          sx={{
            m: 4,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            border: `0.2rem solid ${dict.COLORS.RED}`,
            width: "40%",
            height: "50px",
            backgroundColor: dict.COLORS.WHITE,
            transition: "all 0.25s ease-in-out",
            ":hover": { backgroundColor: dict.COLORS.SECONDARY },
          }}
        >
          CLICK HERE
        </Box> */}
      </Box>
    </Container>
  );
};

export default About;
