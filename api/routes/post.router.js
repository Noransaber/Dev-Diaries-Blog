import express from 'express';
import { create } from '../controllers/post.controllers.js';
import { getposts, deletepost, updatepost } from '../controllers/post.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', create);
router.get('/getposts', getposts);
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost);
router.delete('/updatepost/:postId/:userId', verifyToken, updatepost);

export default router;
