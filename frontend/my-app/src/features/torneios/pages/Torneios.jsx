import './Torneios.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { InicioRoutes } from "../../inicio/constants/routes";

export function Torneios() {
  const navigate = useNavigate();

  const goPageInicio = () => {
    navigate(InicioRoutes.inicio)
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Torneios</h1>
      <p>AQUI TERA OS CARDS DE TORNEIOS, E A CADA CLIQUE IRÁ PARA UMA NOVA PAGINA APRESENTAR O TORNEIO</p>
      <button type="button" onClick={goPageInicio}>Voltar</button>
    </div>
  )
}