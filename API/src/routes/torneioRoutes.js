import {Router} from 'express';
import torneioController from '../controllers/TorneioController';

const router = new Router();

router.get('/index/:id', torneioController.indexByCHE);
router.post('/create/:id', torneioController.store);
router.delete('/delete/:id/:nome', torneioController.delete);

export default router;