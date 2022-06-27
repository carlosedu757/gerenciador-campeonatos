import './styles.css';
import logo from "../images/logo.png";

export function Home() {

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <a href="../Login/index.jsx"><button type="button">Login</button></a>
      <button type="button">Criar Conta</button>
    </div>
  )
}
