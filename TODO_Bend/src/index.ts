import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './model/user';

dotenv.config({ path: '.env' });

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECTION || '')
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch(error => {
    console.error('Error de conexión a la base de datos:', error);
  });

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hola, mundo!' });
});


app.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      res.status(400).json({ message: 'Faltan datos: username o password' });
      return;
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: 'El nombre de usuario ya está en uso', username: existingUser.username, password: existingUser.password });
      return;
    }

    const newUser = new User({
      username,
      password: password,
    });

    await newUser.save();
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
})