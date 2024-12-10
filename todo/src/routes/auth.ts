import { Router } from "express";
import AuthController from "../controllers/auth";

export const authRouter = Router();

authRouter.post('/register', AuthController.registrar);

authRouter.post('/login', AuthController.login);

authRouter.get('/protected-resource', AuthController.authorize);


export default authRouter;