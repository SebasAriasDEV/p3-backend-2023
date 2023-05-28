import { Router } from 'express';
import { createFarm } from '../controllers/farms-controller';

const router: Router = Router();

//Get all animals
router.post('/', createFarm);

export default router;
