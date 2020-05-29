import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import authConfig from '../config/auth';

const generateToken = (params = {}) =>
  jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });

// @desc		Register user
// @route		POST /auth/register
const registerUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      res.status(400).json({ Error: 'User already exists' });
    }

    const user = await User.create(req.body);

    user.password = '*****';

    res.status(200).json({ user, token: generateToken({ id: user.id }) });
  } catch (err) {
    res.status(400).json({ Error: 'err' });
  }
};

// @desc		Authenticate user
// @route		POST /auth/authenticate
const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    res.status(400).json({ Error: 'User not found' });
  }

  if (!(await bcrypt.compare(password, user!.password))) {
    res.status(400).json({ Error: 'Invalid password' });
  }

  user!.password = '*****';

  res.json({ user, token: generateToken({ id: user!.id }) });
};

export { registerUser, authenticateUser };
