import { Router } from 'express';
import { createFarm } from '../controllers/farms-controller';
import { errorHandler } from '../helpers/try-catch-helper';

const router: Router = Router();

//Get all animals
router.post('/', errorHandler(createFarm));

export default router;
