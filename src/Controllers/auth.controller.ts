import { Request, Response } from 'express'
import { authService } from 'services/auth.service'
import { Express } from 'express'

export class AuthController {
    register = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            if(!email || !password)
            {
                console.log('Wrong input')
                return res.sendStatus(400);
            }

            const existingUser = await authService.getUserByEmail(email);
            if(existingUser)
            {
                console.log('User exiting');
                return res.sendStatus(400);
            }

            const user = await authService.register(email, password);
            return res.sendStatus(201);
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user = await authService.login(email, password);
        } catch (error) {
            console.log(error);
        }
    }

}

export const authController = new AuthController();