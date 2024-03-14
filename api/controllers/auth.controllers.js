import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !password || !username || email === '' || password === '' || username === '') {
    return res.status(400).json({ message: 'Please fill in all fields' });
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
    res.status(500).json({ message: err.message });
  }
};
