import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: '.env' });


const connectDB = async () => {
  mongoose.connect(process.env.DB_CONNECTION || '')
    .then(() => {
      console.log('Conexión a la base de datos establecida');
    })
    .catch(error => {
      console.error('Error de conexión a la base de datos:', error);
    });

};

export default connectDB;