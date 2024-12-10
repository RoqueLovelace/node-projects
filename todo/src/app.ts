import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import corsMW from './middlewares/cors';
import authRouter from './routes/auth';

dotenv.config({ path: '.env' });

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(corsMW);

app.use('/auth', authRouter);

connectDB();




app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
