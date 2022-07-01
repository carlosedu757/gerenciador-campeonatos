import './NovoTorneio.css';
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { InicioRoutes } from "../../inicio/constants/routes";
import { useTodo } from '../../../hooks';
import { useCallback, useState } from 'react';

export function NovoTorneio() {

  const { createTorneio } = useTodo();

  const [taskNome, setTaskNome] = useState('');
  const [taskDescricao, setTaskDescricao] = useState('');
  const [taskQtdtimes, setTaskQtdtimes] = useState('');
  const [taskPremiacao, setTaskPremiacao] = useState('');

  const handleOKButton = useCallback(async () => {
    await createTorneio({ nome: taskNome, descricao: taskDescricao, qtdtimes: taskQtdtimes, premiacao: taskPremiacao});
    
    setTaskNome('');
    setTaskDescricao('');
    setTaskQtdtimes('');
    setTaskPremiacao('');
  }, [createTorneio, taskNome, taskDescricao, taskQtdtimes, taskPremiacao]);

  const navigate = useNavigate();

  const goPageInicio = () => {
    navigate(InicioRoutes.inicio)
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <h1>Criar Torneio</h1>
      <h3>Nome:</h3>
      <input type="text" placeholder="Digite o nome do torneio..." value={taskNome} onChange={(e) => setTaskNome(e.target.value)} />
      <h3>Descrição:</h3>
      <input type="text" placeholder="Digite a descrição do torneio..." value={taskDescricao} onChange={(e) => setTaskDescricao(e.target.value)} />
      <h3>Quantidade de times:</h3>
      <input type="text" placeholder="Digite a quantidade de times..." value={taskQtdtimes} onChange={(e) => setTaskQtdtimes(e.target.value)} />
      <h3>Premiação:</h3>
      <input type="text" placeholder="Digite a premiação do torneio..." value={taskPremiacao} onChange={(e) => setTaskPremiacao(e.target.value)} />
      <button type="button" onClick={handleOKButton}>Confirmar</button>
      <button type="button" onClick={goPageInicio}>Voltar</button>
    </div>
  )
}