import { Router } from 'express';
import {
  createFarm,
  deleteFarm,
  getAllFarms,
  updateFarm,
} from '../controllers/farms-controller';
import { errorHandler } from '../helpers/error-handler';

const router: Router = Router();

//********** Create farm **************
router.post('/', errorHandler(createFarm));

//********** Delete farm **************
router.delete('/:id', errorHandler(deleteFarm));

//********** Update farm **************
router.patch('/:id', errorHandler(updateFarm));

//********** Read all farms **************
router.get('/', errorHandler(getAllFarms));

export default router;
