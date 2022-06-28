import './styles.css';
import logo from "../images/logo.png";

export function Login() {

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h2>Login</h2>
      <input type="text" placeholder="Digite seu nome de usuário..." />
      <h2>Senha</h2>
      <input type="text" placeholder="Digite sua senha..." />
      <button type="button">Entrar</button>
    </div>
  )
}