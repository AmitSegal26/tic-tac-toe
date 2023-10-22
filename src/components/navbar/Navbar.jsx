import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import COLORS from "../../utils/COLORS";
import logoImg from "../../assets/imgs/logoTransparent.png";
import ROUTES from "./../../routes/ROUTES";
const Navbar = ({ setIsContactPressedFunc }) => {
  const navigate = useNavigate();
  const linksArr = Object.keys(ROUTES);
  const styleObjForNavLink = ({ isActive }) => {
    return {
      transition: "all 0.5s ease-in-out",
      color: isActive ? COLORS.TEXT1 : COLORS.TEXT2,
      textDecoration: "none",
      borderRadius: "10px",
      backgroundColor: isActive ? COLORS.WHITE : "transparent",
    };
  };
  const handleLogoClick = () => {
    navigate(ROUTES.HOME);
  };
  const handleContactClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setIsContactPressedFunc(true);
  };
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: COLORS.MAIN,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            backgroundColor: COLORS.MAIN,
          }}
        >
          {linksArr.map((link, i) => (
            <NavLink key={link} to={ROUTES[link]} style={styleObjForNavLink}>
              <Toolbar>{link}</Toolbar>
            </NavLink>
          ))}
          <Button
            variant="outlined"
            color="warning"
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.1rem",
              bgcolor: COLORS.TEXT2,
            }}
            autoFocus
            onClick={handleContactClick}
          >
            "Contact The Author!"
          </Button>
        </Box>
        {/* LOGO */}
        <Box
          sx={{ width: "20%", cursor: "pointer" }}
          onClick={handleLogoClick}
          component="img"
          src={logoImg}
        />
      </AppBar>
    </Box>
  );
};

export default Navbar;
