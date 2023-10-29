import React from "react";
import { AppBar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/imgs/logoTransparent.png";
import ROUTES from "./../../routes/ROUTES";
import MenuIcon from "@mui/icons-material/Menu";
import { dict } from "../../utils/dict";
const { COLORS } = dict;
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
      borderRadius: "10px",
      backgroundColor: isActive ? COLORS.WHITE : "transparent",
    };
  };
  const handleLogoClick = () => {
    navigate(ROUTES.GAME);
  };
  const handleContactClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setIsContactPressedFunc(true);
  };
  // const heightOfNavBar = "50px";
  const heightOfNavBar = "100%";
  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: COLORS.MAIN,
        height: `${+heightOfNavBar.split("p")[0] + 20}px`,
        boxShadow: " 0px 0px 0px 13px rgba(0, 0, 0, 1)",
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
            <Box sx={{ maxHeight: "50px", p: 1 }}>{link}</Box>
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
