import {Router} from 'express';
import clienteController from '../controllers/ClienteController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

router.get('/', clienteController.index);
router.post('/cadastro', clienteController.store);
router.put('/atualizar/:id', loginRequired, clienteController.update);
router.delete('/apagar/', loginRequired, clienteController.delete);


export default router;