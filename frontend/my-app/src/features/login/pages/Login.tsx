import './Login.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from "../../homePage/constants/routes";
import { InicioRoutes } from "../../inicio/constants/routes";

export function Login() {
  const navigate = useNavigate();

  const goPageHome = () => {
    navigate(HomeRoutes.homePage)
  }

  const goPageInicio = () => {
    navigate(InicioRoutes.inicio)
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Login</h1>
      <h3>E-mail:</h3>
      <input type="text" placeholder="Digite seu e-mail..." />
      <h3>Senha:</h3>
      <input type="text" placeholder="Digite sua senha..." />
      <button type="button" onClick={goPageInicio}>Entrar</button>
      <button type="button" onClick={goPageHome}>Voltar</button>
    </div>
  )
}