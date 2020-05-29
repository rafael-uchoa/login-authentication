import Router from 'express';
import { registerUser, authenticateUser } from './controllers/authController';

const routes = Router();

export default routes
  .post('/auth/register', registerUser)
  .post('/auth/authenticate', authenticateUser);
