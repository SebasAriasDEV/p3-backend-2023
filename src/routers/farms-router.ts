import { Router } from 'express';
import { createFarm, deleteFarm } from '../controllers/farms-controller';
import { errorHandler } from '../helpers/error-handler';

const router: Router = Router();

//********** Create farm **************
router.post('/', errorHandler(createFarm));

//********** Create farm **************
router.delete('/:id', errorHandler(deleteFarm));

export default router;
