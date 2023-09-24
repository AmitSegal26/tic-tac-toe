import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Home from "../pages/Home";
import Game from "../pages/Game";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}></Route>
      <Route path={ROUTES.GAME} element={<Game />}></Route>
    </Routes>
  );
};

export default Router;
