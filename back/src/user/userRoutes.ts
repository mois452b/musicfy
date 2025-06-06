import express from 'express';
import { UserController } from './userController';
import { authenticateToken } from '../auth/authMiddleware';

const router = express.Router();

router.get('/', UserController.getAll);
router.get('/me', authenticateToken, UserController.getByToken);
router.get('/cities', UserController.getCities);
router.get('/:id', UserController.getById);
router.put('/:id', authenticateToken, UserController.update);
router.delete('/:id', authenticateToken, UserController.delete);

export default router;
