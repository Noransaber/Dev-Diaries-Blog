import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.router.js';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!!!');
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
  });

const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000!!!');
});
app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
