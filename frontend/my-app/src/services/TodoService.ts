import { Api } from '../providers';
import { ITodo } from '../interfaces';

const getAllTodos = () => Api.get<ITodo[]>('/v1/todos');

const createTodo = (todo: Pick<ITodo, 'nome' | 'email' | 'password'>) => Api.post('/clientes/cadastro', todo)

const login = (todo: Pick<ITodo, 'email' | 'password'>) => Api.post('/token', todo)

const updateTodo = (id: string, todo: Pick<ITodo, 'nome' | 'password'>) => Api.put(`/v1/todos/${id}`, todo)

export const TodoService = {
  getAllTodos,
  createTodo,
  updateTodo,
  login,
};