import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Game from "../pages/Game";
import GameRandom from "../pages/GameRandom";
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.BOT} element={<GameRandom />} />
      <Route path={ROUTES.GAME} element={<Game />} />
    </Routes>
  );
};

export default Router;
