import { Router } from 'express';
import { RootController } from '../controllers/root.controller';

const rootController = new RootController();

const router = Router()

router.get('/', rootController.getRoot)

export default router;