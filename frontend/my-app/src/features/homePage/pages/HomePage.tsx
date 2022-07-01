import React from "react";
import logo from "../../images/logoHome.png";
import { useNavigate } from "react-router-dom";
import { LoginRoutes } from "../../login/constants/routes";
import { CadastroRoutes } from "../../cadastro/constants/routes";
import './HomePage.css';

export const HomePage: React.FC = () => {

  const navigate = useNavigate();

  const goPageLogin = () => {
    navigate(LoginRoutes.login)
  }

  const goPageCadastro = () => {
    navigate(CadastroRoutes.cadastro)
  }

  return (
    <div className="container">
      <img id="logoHome" src={logo} alt="logo" />
      <button type="button" onClick={goPageLogin}>Login</button>
      <button type="button" onClick={goPageCadastro}>Criar Conta</button>
    </div>
  );
};
