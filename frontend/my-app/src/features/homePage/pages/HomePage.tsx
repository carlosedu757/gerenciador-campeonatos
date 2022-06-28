import React from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { LoginRoutes } from "../../login/constants/routes";
import './HomePage.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goPageLogin = () => {
    navigate(LoginRoutes.login)
  }

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <button type="button" onClick={goPageLogin}>Login</button>
      <button type="button">Criar Conta</button>
    </div>
  );
};
