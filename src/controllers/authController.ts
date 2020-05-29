import { Request, Response } from 'express';
import User from '../models/user';

// @desc		Register user
// @route		POST /auth/register
const registerUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      res.status(400).send({ Error: 'User already exists' });
    }

    const user = await User.create(req.body);

    user.password = '*****';

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ Error: 'err' });
  }
};

export { registerUser };
