import React from "react";
import { AppBar, Box, Toolbar, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import COLORS from "../../COLORS";
import HomeIcon from "@mui/icons-material/Home";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
// import logoImg from "../../assets/imgs/logo.png";
import logoImg from "../../assets/imgs/logoTransparent.png";
const Navbar = () => {
  const styleObjForNavLink = ({ isActive }) => {
    return {
      transition: "all 0.5s ease-in-out",
      color: isActive ? COLORS.TEXT1 : COLORS.TEXT2,
      textDecoration: "none",
      backgroundColor: isActive ? COLORS.WHITE : "transparent",
    };
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
            justifyContent: "start",
            alignItems: "center",
            backgroundColor: COLORS.MAIN,
          }}
        >
          <Tooltip title="Home Page">
            <NavLink to={ROUTES.HOME} style={styleObjForNavLink}>
              <Toolbar>
                <HomeIcon />
              </Toolbar>
            </NavLink>
          </Tooltip>
          <Tooltip title="Game">
            <NavLink to={ROUTES.GAME} style={styleObjForNavLink}>
              <Toolbar>
                <VideogameAssetIcon />
              </Toolbar>
            </NavLink>
          </Tooltip>
        </Box>
        <Box sx={{ width: "20%" }} component="img" src={logoImg} />
      </AppBar>
    </Box>
  );
};

export default Navbar;
