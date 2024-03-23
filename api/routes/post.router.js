import express from 'express';
import { create } from '../controllers/post.controllers.js';

const router = express.Router();

router.post('/create', create);

export default router;
