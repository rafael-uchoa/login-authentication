import express from 'express';
import routes from './routes';
import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5555, () => console.log('Server listening on port 5555'));
