import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Game from "../pages/Game";
import GameRandom from "../pages/GameRandom";
import Page404 from "../pages/Page404";
import CheckErrorRoute from "./CheckErrorRoute";
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.BOT} element={<GameRandom />} />
      <Route path={ROUTES.GAME} element={<Game />} />
      <Route path="*" element={<CheckErrorRoute element={<Page404 />} />} />
    </Routes>
  );
};

export default Router;
