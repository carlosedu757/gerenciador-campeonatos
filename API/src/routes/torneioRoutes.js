import {Router} from 'express';
import torneioController from '../controllers/TorneioController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/index/:id', loginRequired, torneioController.indexByCHE);
router.post('/create/:id', loginRequired, torneioController.store);
router.delete('/delete/:id/:nome', loginRequired, torneioController.delete);

export default router;