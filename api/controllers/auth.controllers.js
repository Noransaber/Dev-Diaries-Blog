import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
  // Destructure the username, email, and password from the request body
  const { username, email, password } = req.body;

  // If any of the required fields are missing, return an error
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

export const signin = async (req, res, next) => {
  // Destructure the email and password from the request body
  const { email, password } = req.body;

  // If any of the required fields are missing, return an error
  if (!email || !password || email === '' || password === '') {
    next(errorHandler('Please provide all required fields', 400));
  }
  // Find the user with the email provided
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler('User not found', 404));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      next(errorHandler('Invalid Password', 404));
    }
    // If the user is found and the password is valid, create a token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // Send the token in a cookie and the user data in the response
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie('token', token, {
        httpOnly: true,
      })
      .json({ rest });
  } catch (err) {
    next(err);
  }
};
