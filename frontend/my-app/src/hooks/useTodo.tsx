import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { InicioRoutes } from '../features/inicio/constants/routes';
import { LoginRoutes } from "../features/login/constants/routes";
import { ITodo } from '../interfaces';
import { ITorneio } from '../interfaces/ITorneio';
import { TodoService } from '../services';

export const useTodo = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<ITodo[]>([]);

  const getAllTodos = useCallback(async () => {
    const { status, data } = await TodoService.getAllTodos();

    if (status !== 200) throw new Error();
    setTasks(data);
  }, []);

  const createTodo = useCallback(async (todo: Pick<ITodo, 'nome' | 'email' | 'password'>) => {
    const { status } = await TodoService.createTodo(todo);

    if (status !== 200) throw new Error();
    navigate(LoginRoutes.login);
  }, [navigate]);

  const createTorneio = useCallback(async (todo: Pick<ITorneio, 'nome' | 'descricao' | 'qtd_times' | 'premiacao'>) => {
    const { status } = await TodoService.createTorneio(todo);

    if (status !== 200) throw new Error();
    navigate(InicioRoutes.inicio);
  }, [navigate]);

  const login = useCallback(async (todo: Pick<ITodo, 'email' | 'password'>) => {
    const { status } = await TodoService.login(todo);

    if (status !== 200) throw new Error();
    
    localStorage.setItem("1","1");
    navigate(InicioRoutes.inicio);
  }, [navigate]);

  const updateTodo = useCallback(async (id: string, todo: Pick<ITodo, 'nome' | 'email' | 'password'>) => {
    const { status } = await TodoService.updateTodo(id, todo);

    if (status !== 200) throw new Error();

  }, []);

  return {
    tasks,
    getAllTodos,
    createTorneio,
    createTodo,
    updateTodo,
    login,
  };
};