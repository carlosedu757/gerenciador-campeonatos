import './Login.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from 'react';
import { HomeRoutes } from "../../homePage/constants/routes";
import { useTodo } from '../../../hooks';

export function Login() {

  const { login } = useTodo();
  
  const [taskEmail, setTaskEmail] = useState('');
  const [taskPassword, setTaskPassword] = useState('');
  
  const handleOKButton = useCallback(async () => {
    await login({ email: taskEmail, password: taskPassword});
    setTaskEmail('');
    setTaskPassword('');
  }, [login, taskEmail, taskPassword]);
  
  const navigate = useNavigate();

  const goPageHome = () => {
    navigate(HomeRoutes.homePage)
  }

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Login</h1>
      <h3>E-mail:</h3>
      <input type="text" placeholder="Digite seu e-mail..." value={taskEmail} onChange={(e) => setTaskEmail(e.target.value)} />
      <h3>Senha:</h3>
      <input type="text" placeholder="Digite sua senha..." value={taskPassword} onChange={(e) => setTaskPassword(e.target.value)} />
      <button type="button" onClick={handleOKButton}>Entrar</button>
      <button type="button" onClick={goPageHome}>Voltar</button>
    </div>
  )
}