import express from 'express';
import PostController from '../controllers/PostControllers';

const router = express.Router();

router.get('/posts', PostController.listPosts);

router.post('/posts', PostController.createPost);

router.put('/posts/:id', PostController.updatePost);

router.delete('/posts/:id', PostController.deletePost);

export default router;
