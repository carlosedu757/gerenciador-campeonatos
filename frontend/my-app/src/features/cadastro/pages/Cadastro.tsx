import './Cadastro.css';
import { useCallback, /*useEffect,*/ useState } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from "../../homePage/constants/routes";
/*import { InicioRoutes } from "../../inicio/constants/routes";*/
import { useTodo } from '../../../hooks';

export function Cadastro() {
  const { /*getAllTodos,*/ createTodo } = useTodo();
  
  const [taskName, setTaskName] = useState('');
  const [taskEmail, setTaskEmail] = useState('');
  const [taskPassword, setTaskPassword] = useState('');
  
  const handleOKButton = useCallback(async () => {
    await createTodo({ nome: taskName, email: taskEmail, password: taskPassword});
    setTaskName('');
    setTaskEmail('');
    setTaskPassword('');
  }, [createTodo, taskName, taskEmail, taskPassword]);
  
  const navigate = useNavigate();

  const goPageHome = () => {
    navigate(HomeRoutes.homePage)
  }

  /*const goPageInicio = () => {
    navigate(InicioRoutes.inicio)
  }*/

  /*useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);*/
  
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Criar Conta</h1>
      <h3>Nome:</h3>
      <input placeholder="Digite seu nome de usuário..." value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <h3>E-mail:</h3>
      <input type="text" placeholder="Digite seu e-mail..." value={taskEmail} onChange={(e) => setTaskEmail(e.target.value)}/>
      <h3>Senha:</h3>
      <input type="text" placeholder="Digite sua senha..." value={taskPassword} onChange={(e) => setTaskPassword(e.target.value)}/>
      <button type="button" /*onClick={goPageInicio}*/ onClick={handleOKButton}>Confirmar</button>
      <button type="button" onClick={goPageHome}>Voltar</button>
    </div>
  )
}