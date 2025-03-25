import express from "express";
import { authController } from "../Controllers/auth.controller";
import { wrapRequestHandler } from "../utils/handler";


const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/userlist', authController.userlist);

export default authRouter;


