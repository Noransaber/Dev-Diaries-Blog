import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/errorHandler';
import bcrypt from 'bcrypt';
import User from '../models/user.models';
export const test = (req, res) => {
  res.json({ message: 'User controller works' });
};

export const updateUser = async (req, res, next) => {
  if (req.params.userId != req.user.id) {
    return next(errorHandler(403, 'You are not allowed to update this user'));
  }
  if (req.body.password.length < 6 || req.body.password.length > 20) {
    return next(errorHandler(400, 'Password must be between 6 and 20 characters'));
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (req.body.username.length < 7 || req.body.username.length > 20) {
    return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
  }
  if (req.body.username.includes(' ')) {
    return next(errorHandler(400, 'Username must not contain spaces'));
  }
  if (req.body.username !== req.body.username.toLowerCase()) {
    return next(errorHandler(400, 'Username must be in lowercase'));
  }
  if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
    return next(errorHandler(400, 'Username must contain only letters and numbers'));
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
