import Router from 'express';
import { registerUser, authenticateUser } from '../controllers/authController';

const authRoutes = Router();

export default authRoutes
  .post('/auth/register', registerUser)
  .post('/auth/authenticate', authenticateUser);
