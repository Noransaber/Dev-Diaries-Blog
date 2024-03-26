import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment } from '../controllers/comment.controllers.js';
import { getPostComments } from '../controllers/comment.controllers.js';
import { likeComment } from '../controllers/comment.controllers.js';
import { editComment } from '../controllers/comment.controllers.js';
import { deleteComment } from '../controllers/comment.controllers.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);

export default router;
