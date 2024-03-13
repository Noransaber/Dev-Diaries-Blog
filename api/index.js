import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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
