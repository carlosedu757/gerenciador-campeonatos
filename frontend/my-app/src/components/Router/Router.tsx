import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../features/homePage/pages";
import { HomeRoutes } from "../../features/homePage/constants/routes";
import { Login } from "../../features/login/pages";
import { LoginRoutes } from "../../features/login/constants/routes";
import { Cadastro } from "../../features/cadastro/pages";
import { CadastroRoutes } from "../../features/cadastro/constants/routes"
import { Inicio } from "../../features/inicio/pages";
import { InicioRoutes } from "../../features/inicio/constants/routes";
import { NovoTorneio } from "../../features/novoTorneio/pages";
import { NovoTorneioRoutes } from "../../features/novoTorneio/constants/routes";
import { Torneios } from "../../features/torneios/pages";
import { TorneiosRoutes } from "../../features/torneios/constants/routes";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HomeRoutes.homePage} element={<HomePage />} />
        <Route path={LoginRoutes.login} element={<Login />} />
        <Route path={CadastroRoutes.cadastro} element={<Cadastro />} />
        <Route path={InicioRoutes.inicio} element={<Inicio />} />
        <Route path={NovoTorneioRoutes.novoTorneio} element={<NovoTorneio />} />
        <Route path={TorneiosRoutes.torneios} element={<Torneios />} />
      </Routes>
    </BrowserRouter>
  );
};
