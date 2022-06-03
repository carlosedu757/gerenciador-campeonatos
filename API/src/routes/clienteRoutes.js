import {Router} from 'express';
import clienteController from '../controllers/ClienteController';

const router = new Router();

router.get('/', clienteController.index);
router.post('/cadastro', clienteController.store);
router.put('/atualizar/:id', clienteController.update);
router.delete('/apagar/:id', clienteController.delete);


export default router;