import React from "react";
import { AppBar, Box, Toolbar, Tooltip } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import COLORS from "../../utils/COLORS";
import HomeIcon from "@mui/icons-material/Home";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CasinoIcon from "@mui/icons-material/Casino";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import logoImg from "../../assets/imgs/logoTransparent.png";
const Navbar = () => {
  const navigate = useNavigate();
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
          <Tooltip title="Game Random Mode">
            <NavLink to={ROUTES.GAMERANDOM} style={styleObjForNavLink}>
              <Toolbar>
                <CasinoIcon />
              </Toolbar>
            </NavLink>
          </Tooltip>
          <Tooltip title="Game">
            <NavLink to={ROUTES.GAME} style={styleObjForNavLink}>
              <Toolbar>
                <PeopleAltIcon />
              </Toolbar>
            </NavLink>
          </Tooltip>
        </Box>
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
