import express from "express"
import { userController } from "../Controllers/user.controller";
import authRouter from "./auth.routers";

const userRouter = express.Router();

userRouter.post('/userlist', userController.userlist);

export default userRouter;
