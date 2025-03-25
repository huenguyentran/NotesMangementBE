import express from "express"
import { userController } from "../Controllers/user.controller";

const userRouter = express.Router();

userRouter.post('/userList', userController.userList);

userRouter.post('/getUserById', userController.getUserByID);

export default userRouter;
