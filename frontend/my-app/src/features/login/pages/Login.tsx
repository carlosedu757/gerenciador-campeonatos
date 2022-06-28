import './Login.css';
import logo from "../../images/logo.png";

export function Login() {

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h3>Login:</h3>
      <input type="text" placeholder="Digite seu nome de usuário..." />
      <h3>Senha:</h3>
      <input type="text" placeholder="Digite sua senha..." />
      <button type="button">Entrar</button>
      <button type="button">Voltar</button>
    </div>
  )
}