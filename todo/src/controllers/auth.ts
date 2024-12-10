import { Request, Response } from "express";
import bcrypt from 'bcrypt';

import User from "../models/user";

class AuthController {

  static async registrar(req: Request, res: Response) {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: 'Data is missing: username o password' });
      return;
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.status(400).json({ message: 'User is already registered' });
      return;
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        password: hash
      });
      await newUser.save();

      res.status(201).json({ message: 'User created succesfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }

  };

  static async login(req: Request, res: Response) { };

  static async authorize(req: Request, res: Response) { };

}

export default AuthController;