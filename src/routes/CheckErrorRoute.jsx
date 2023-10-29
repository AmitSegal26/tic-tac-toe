import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ROUTES from "./ROUTES";

const CheckErrorRoute = ({ element }) => {
  const { pathname } = useLocation();
  return pathname && pathname === "/tic-tac-toe" ? (
    <Navigate to={ROUTES.GAME} />
  ) : (
    element
  );
};

export default CheckErrorRoute;
