import './styles.css';
import logo from "../images/logo.png";

export function Home() {

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <button type="button">Login</button>
      <button type="button">Criar Conta</button>
    </div>
  )
}
