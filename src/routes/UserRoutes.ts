import express from 'express';
import UserController from '../controllers/UserControllers';

const router = express.Router();

router.get('/users', UserController.listUsers);

router.post('/users', UserController.createUser);

router.put('/users/:id', UserController.updateUser);

router.delete('/users/:id', UserController.deleteUser);

export default router;
