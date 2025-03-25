import { User } from "../Models/user.model";
//import sequelize from "sequelize";
import bcrypt from 'bcrypt'

class AuthService {
    register = async (Email: string, Password: string) => {
        const hashedPassword = await bcrypt.hash(Password, 10);
        console.log(Email, Password, 'authService.service.ts before create');
        const new_user = await User.create({
            email: Email,
            password: Password
        })

        console.log(Email, Password, 'authService.service.ts after create');
        return new_user; 
    }

    async login(email: string, password: string) {
        const user = await User.findOne({ where: { email } });
        if (!user) throw new Error('User not found');
    
        const isValid = await user.checkPassword(password);
        if (!isValid) throw new Error('Invalid password');
    
        return user;
    }

    getUserByEmail = async (Email: string)=>{
        const user = await User.findOne({where: { email: Email}});
        if(!user) return null;
        return user;
    }
}

export const authService = new AuthService();
