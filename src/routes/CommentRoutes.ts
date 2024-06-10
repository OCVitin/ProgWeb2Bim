import express from 'express';
import CommentController from '../controllers/CommentControllers';

const router = express.Router();

router.get('/comments', CommentController.listComments);

router.post('/comments', CommentController.createComment);

router.put('/comments/:id', CommentController.updateComment);

router.delete('/comments/:id', CommentController.deleteComment);

export default router;
