import express from 'express';
import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import './database';

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(projectRoutes);

app.listen(5555, () => console.log('Server listening on port 5555'));
