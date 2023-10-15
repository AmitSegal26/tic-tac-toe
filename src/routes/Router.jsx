import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Home from "../pages/Home";
import Game from "../pages/game/Game";
import GameRandom from "../pages/randomGame/GameRandom";
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.GAMERANDOM} element={<GameRandom />} />
      <Route path={ROUTES.GAME} element={<Game />} />
    </Routes>
  );
};

export default Router;
