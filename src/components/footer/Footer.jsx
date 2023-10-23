import React, { useEffect, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import COLORS from "../../utils/COLORS";
import IconComponentForFooter from "./IconComponentForFooter";
import myImg from "../../assets/imgs/Picture1.png";
const Footer = ({ isContactPressedState, setIsContactPressedFunc }) => {
  const [bgColorState, setBgColorState] = useState(COLORS.BLACK);
  useEffect(() => {
    if (isContactPressedState) {
      setBgColorState(COLORS.WHITE);
      setTimeout(() => {
        setIsContactPressedFunc(false);
      }, 500);
    } else {
      setBgColorState(COLORS.BLACK);
    }
  }, [isContactPressedState, setIsContactPressedFunc]);
  const arrOfLinks = [
    {
      type: "gitHub",
      href: "https://github.com/AmitSegal26",
      title: "GitHub",
    },
    {
      type: "facebook",
      href: "https://www.facebook.com/amit.segal.731",
      title: "Facebook",
    },
    {
      type: "whatsApp",
      href: "https://wa.me/972526889067/?text=Hello Amit, I'm contacting you from your Tic-Tac-Toe app!",
      title: "WhatsApp",
    },
    {
      type: "phone",
      href: "tel:+972526889067",
      title: "Make a Phone Call",
    },
    {
      type: "email",
      href: "mailto:amitseg2612@gmail.com?subject=Tic Tac Toe Request&body=Hello! I'm contacting you after playing your Tic Tac Toe game!",
      title: "Email",
    },
    {
      type: "linkedIn",
      href: "https://www.linkedin.com/in/amit-segal-704755278/",
      title: "LinkedIn",
    },
  ];

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        transition: "background-color 0.5s ease-in-out",
        backgroundColor: bgColorState,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "2rem", letterSpacing: "0.3rem" }}
        >
          © Amit Segal 2023
        </Typography>
        <Avatar
          src={myImg}
          alt="author's face"
          sx={{
            aspectRatio: "1/1",
            height: "100px",
            width: "100px",
            ml: "2rem",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "40vw",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {arrOfLinks.map((linkObj) => (
          <IconComponentForFooter key={linkObj.type} linkObjProp={linkObj} />
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
