import { Router } from 'express';
import {
  createBatch,
  deleteBatch,
  getAllBatches,
  updateBatch,
} from '../controllers/batches-controller';
import { errorHandler } from '../helpers/error-handler';

const router = Router();

//********* Create a Batch */
router.post('/', errorHandler(createBatch));

//********* Delete a Batch */
router.delete('/:id', errorHandler(deleteBatch));

//********* Update a Batch */
router.patch('/:id', errorHandler(updateBatch));

//********* Read all Batches */
router.get('/', errorHandler(getAllBatches));

//Exports
export default router;
