import { Router } from 'express';
import { errorHandler } from '../helpers/error-handler';
import {
  createResource,
  deleteResource,
  getAllResources,
  updateResource,
} from '../controllers/resources-controller';

const router = Router();

//** Create a resource */
router.post('/', errorHandler(createResource));

//** Delete a resource by ID */
router.delete('/:id', errorHandler(deleteResource));

//** Update a resource by ID */
router.patch('/:id', errorHandler(updateResource));

//** Get all resources */
router.get('/', errorHandler(getAllResources));

//Exports
export default router;
