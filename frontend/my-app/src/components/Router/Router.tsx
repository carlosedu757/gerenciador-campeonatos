import React from "react";
import { Login } from "../../features/login/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginRoutes } from "../../features/login/constants/routes";
import { HomeRoutes } from "../../features/homePage/constants/routes";
import { HomePage } from "../../features/homePage/pages";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LoginRoutes.login} element={<Login />} />
        <Route path={HomeRoutes.homePage} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
