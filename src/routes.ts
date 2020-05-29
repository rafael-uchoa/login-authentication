import Router from 'express';
import { registerUser } from './controllers/authController';

const routes = Router();

export default routes.post('/auth/register', registerUser);
