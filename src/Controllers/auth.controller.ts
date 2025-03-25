import { Request, Response } from "express";
import { authService } from '../services/auth.service'
import { NextFunction, ParamsDictionary } from 'express-serve-static-core'
import { console } from "inspector";
//import { Express } from 'express'

export class AuthController {
    register = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                console.log('Wrong input');
                res.status(400).json({ message: 'Missing email or password' });
            }

            const existingUser = await authService.getUserByEmail(email);
            if (existingUser) {
                console.log('User exists');
                res.status(400).json({ message: 'User already exists' });
            }
            else
            {
                console.log(email, password, "2");
                const user = await authService.register(email, password);
                res.status(201).json(user);

            }
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            console.log(email, password);
            const user = await authService.login(email, password);
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.sendStatus(400).json(error);
        }
    }

}

export const authController = new AuthController();