import React from "react";
import { AppBar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/imgs/logoTransparent.png";
import ROUTES from "./../../routes/ROUTES";
import MenuIcon from "@mui/icons-material/Menu";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { dict } from "../../utils/dict";
const { COLORS } = dict;

const IconCompnentForLinks = ({ type }) => {
  switch (type) {
    case "HOME":
      return <HomeIcon />;
    case "REGISTER":
      return <HowToRegIcon />;
    case "GAME":
      return <SportsKabaddiIcon />;
    case "BOT":
      return <SmartToyIcon />;
    case "ONLINE":
      return <LanguageIcon />;
    default:
      return "";
  }
};
const Navbar = ({ setIsContactPressedFunc }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const linksArr = Object.keys(ROUTES);
  const styleObjForNavLink = ({ isActive }) => {
    return {
      transition: "all 0.5s ease-in-out",
      color: isActive ? COLORS.TEXT1 : COLORS.TEXT2,
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      letterSpacing: "0.05rem",
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
  const heightOfNavBar = "100%";
  return (
    <AppBar
      position="fixed"
      sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: COLORS.MAIN,
        height: `${+heightOfNavBar.split("p")[0] + 20}px`,
        boxShadow: "0px 1px 20px 5px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {linksArr.map((link) => (
            <MenuItem key={link} onClick={handleCloseNavMenu}>
              <NavLink key={link} to={ROUTES[link]} style={styleObjForNavLink}>
                {link}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: "1.5rem",
          backgroundColor: COLORS.MAIN,
          height: heightOfNavBar,
        }}
      >
        {linksArr.map((link) => (
          <NavLink key={link} to={ROUTES[link]} style={styleObjForNavLink}>
            <Box
              sx={{
                maxHeight: "50px",
                p: 1,
                alignItems: "center",
                gap: "0.2rem",
                display: "flex",
              }}
            >
              <IconCompnentForLinks type={link} />
              {link}
            </Box>
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
        sx={{ cursor: "pointer", height: heightOfNavBar }}
        onClick={handleLogoClick}
        component="img"
        src={logoImg}
      />
    </AppBar>
  );
};

export default Navbar;
