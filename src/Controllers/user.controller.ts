import { userService } from "../services/user.service";
import { Request, Response } from "express";

class UserController{
    userlist = async (req: Request, res: Response) => {
        try {
            const users = await userService.getAllUser();
            console.log(users.toString);
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    }
}

export const userController = new UserController;