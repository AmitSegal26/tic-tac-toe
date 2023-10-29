import { Box, CircularProgress, Tooltip } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import GitHubIcon from "@mui/icons-material/GitHub";
import { dict } from "../../utils/dict";
const { COLORS } = dict;
const IconComponentForFooter = ({ linkObjProp }) => {
  const styleObjIcon = { color: "white" };
  const pickColor = (linkObj) => {
    if (!linkObj) {
      return "";
    }
    const { type } = linkObj;
    switch (type) {
      case "linkedIn":
        return "#0077B5";
      case "phone":
        return "#69727D";
      case "whatsApp":
        return "#25D366";
      case "gitHub":
        return "#69727D";
      case "facebook":
        return "#3B5998";
      case "email":
        return "#333333";
      default:
        return COLORS.SECONDARY;
    }
  };
  const pickIcon = (linkObj) => {
    if (!linkObj) {
      return "";
    }
    const { type } = linkObj;
    switch (type) {
      case "linkedIn":
        return <LinkedInIcon sx={styleObjIcon} />;
      case "phone":
        return <PhoneCallbackIcon sx={styleObjIcon} />;
      case "whatsApp":
        return <WhatsAppIcon sx={styleObjIcon} />;
      case "gitHub":
        return <GitHubIcon sx={styleObjIcon} />;
      case "facebook":
        return <FacebookIcon sx={styleObjIcon} />;
      case "email":
        return <AlternateEmailIcon sx={styleObjIcon} />;
      default:
        return <CircularProgress sx={styleObjIcon} />;
    }
  };
  return (
    <Tooltip key={linkObjProp.type} arrow title={linkObjProp.title}>
      <Box
        component="a"
        target="_blank"
        href={linkObjProp?.href}
        sx={{
          width: "50px",
          aspectRatio: "1/1",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.25s ease-in-out",
          cursor: "pointer",
          ":hover": {
            transform: "scale(1.3)",
          },
          backgroundColor: pickColor(linkObjProp),
        }}
      >
        {pickIcon(linkObjProp)}
      </Box>
    </Tooltip>
  );
};

export default IconComponentForFooter;
