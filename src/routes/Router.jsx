import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Game from "../pages/Game";
import GameRandom from "../pages/GameBot";
import RegisterPage from "../pages/RegisterPage";
import LandingPage from "../pages/landingPage/LandingPage";
import Online from "../pages/Online";
const MarginedContainer = ({ children }) => {
  return <div style={{ padding: "3rem" }}>{children}</div>;
};
const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.GAME}
        element={
          <MarginedContainer>
            <Game />
          </MarginedContainer>
        }
      />
      <Route
        path={ROUTES.REGISTER}
        element={
          <MarginedContainer>
            <RegisterPage />
          </MarginedContainer>
        }
      />
      <Route
        path={ROUTES.BOT}
        element={
          <MarginedContainer>
            <GameRandom />
          </MarginedContainer>
        }
      />
      <Route
        path={ROUTES.ONLINE}
        element={
          <MarginedContainer>
            <Online />
          </MarginedContainer>
        }
      />
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={"*"} element={<Navigate to={ROUTES.HOME} />} />
    </Routes>
  );
};

export default Router;
