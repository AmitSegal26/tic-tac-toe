import React from "react";
import { Box } from "@mui/material";
import COLORS from "../../utils/COLORS";
import IconComponentForFooter from "./IconComponentForFooter";

const Footer = () => {
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
        backgroundColor: COLORS.MAIN,
        border: "3px solid black",
      }}
    >
      {arrOfLinks.map((linkObj) => (
        <IconComponentForFooter key={linkObj.type} linkObjProp={linkObj} />
      ))}
    </Box>
  );
};

export default Footer;
