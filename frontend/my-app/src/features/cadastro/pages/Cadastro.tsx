import './Cadastro.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from "../../homePage/constants/routes";

export function Cadastro() {
    const navigate = useNavigate();

    const goPageHome = () => {
      navigate(HomeRoutes.homePage)
    }
  
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Criar Conta</h1>
      <h3>Nome:</h3>
      <input type="text" placeholder="Digite seu nome de usuário..." />
      <h3>E-mail:</h3>
      <input type="text" placeholder="Digite seu e-mail..." />
      <h3>Senha:</h3>
      <input type="text" placeholder="Digite sua senha..." />
      <button type="button" /*onClick={}*/>Confirmar</button>
      <button type="button" onClick={goPageHome}>Voltar</button>
    </div>
  )
}