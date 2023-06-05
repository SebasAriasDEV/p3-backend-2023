import { Router } from 'express';
import { errorHandler } from '../helpers/error-handler';
import { createResourceEvent } from '../controllers/resources-events-router';

const router = Router();

router.post('/', errorHandler(createResourceEvent));

//Export
export default router;
