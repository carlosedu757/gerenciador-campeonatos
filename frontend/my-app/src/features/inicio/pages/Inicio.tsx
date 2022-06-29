import './Inicio.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from "../../homePage/constants/routes";
import { NovoTorneioRoutes } from "../../novoTorneio/constants/routes";
import { TorneiosRoutes } from "../../torneios/constants/routes";

export function Inicio() {
  const navigate = useNavigate();

  const goPageHome = () => {
    navigate(HomeRoutes.homePage)
  }

  const goPageNovoTorneio = () => {
    navigate(NovoTorneioRoutes.novoTorneio)
  }

  const goPageTorneios = () => {
    navigate(TorneiosRoutes.torneios)
  }

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Bem-vindo, name!</h1>
      <button type="button" onClick={goPageTorneios}>Meus Torneios</button>
      <button type="button" onClick={goPageNovoTorneio}>Criar Torneio</button>
      <button type="button" onClick={goPageHome}>Sair</button>
    </div>
  )
}