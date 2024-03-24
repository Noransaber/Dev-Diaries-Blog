import express from 'express';
import { create } from '../controllers/post.controllers.js';
import { getposts } from '../controllers/post.controllers.js';

const router = express.Router();

router.post('/create', create);
router.get('/getposts', getposts);

export default router;
