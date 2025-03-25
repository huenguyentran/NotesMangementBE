import { userService } from "../services/user.service";
import { Request, Response } from "express";

class UserController{
    userList = async (req: Request, res: Response) => {
        try {
            const users = await userService.getAllUser();
            console.log(users.toString);
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    }

    getUserByID = async (req: Request, res: Response) => {
        try {
            const user_id = req.body;
            // const User = userService.getUserByID(user_id);
            // if(User == null) 
            //     res.status(400).json({ message: 'User invalid' });
            // res.status(202).json((await User).dataValues);
        } catch(error) {
            console.log(error);
            res.status(400);
        }
    }
}

export const userController = new UserController;