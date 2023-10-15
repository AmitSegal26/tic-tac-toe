import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Home from "../pages/Home";
import Game from "../pages/game/Game";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.GAMERANDOM} element={<h1>Put Random Game Here</h1>} />
      <Route path={ROUTES.GAME} element={<Game />} />
    </Routes>
  );
};

export default Router;
