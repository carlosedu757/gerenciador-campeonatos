import './NovoTorneio.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { InicioRoutes } from "../../inicio/constants/routes";

export function NovoTorneio() {
  const navigate = useNavigate();

  const goPageInicio = () => {
    navigate(InicioRoutes.inicio)
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Criar Torneio</h1>
      <h3>Nome:</h3>
      <input type="text" placeholder="Digite o nome do torneio..." />
      <h3>Descrição:</h3>
      <input type="text" placeholder="Digite a descrição do torneio..." />
      <h3>Quantidade de times:</h3>
      <input type="text" placeholder="Digite a quantidade de times..." />
      <h3>Premiação:</h3>
      <input type="text" placeholder="Digite a premiação do torneio..." />
      <button type="button" onClick={goPageInicio}>Confirmar</button>
      <button type="button" onClick={goPageInicio}>Voltar</button>
    </div>
  )
}