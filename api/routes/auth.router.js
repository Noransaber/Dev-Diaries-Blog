import express from 'express';
import { signUp } from '../controllers/auth.controllers.js';
import { signin } from '../controllers/auth.controllers.js';
import { google } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signin);
router.post('/google', google);

export default router;
