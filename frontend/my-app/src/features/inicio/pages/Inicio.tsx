import './Inicio.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from "../../homePage/constants/routes";

export function Inicio() {
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
      <h1>Bem-vindo, name!</h1>
      <button type="button">Meus Torneios</button>
      <button type="button">Criar Torneio</button>
      <button type="button" onClick={goPageHome}>Sair</button>
    </div>
  )
}