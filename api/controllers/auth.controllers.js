import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!email || !password || !username || email === '' || password === '' || username === '') {
    next(errorHandler('Please provide all required fields', 400));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    next(err);
  }
};
