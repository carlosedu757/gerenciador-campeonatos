import './Login.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from "../../homePage/constants/routes";

export function Login() {
  const navigate = useNavigate();

  const goPageHome = () => {
    navigate(HomeRoutes.homePage)
  }

  /*const goPageCadastro = () => {
    navigate(CadastroRoutes.cadastro)
  }*/
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Login</h1>
      <h3>E-mail:</h3>
      <input type="text" placeholder="Digite seu nome de usuário..." />
      <h3>Senha:</h3>
      <input type="text" placeholder="Digite sua senha..." />
      <button type="button">Entrar</button>
      <button type="button" onClick={goPageHome}>Voltar</button>
    </div>
  )
}