import { User } from "Models/user.model";
import bcrypt from 'bcrypt'

export class AuthService {
    async register (email: string, password: string){
        const hashedPassword = await bcrypt.hash(password, 10);
        return await User.create({email, password: hashedPassword});
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
        if(!user) return {}
        return user;
    }
}

export const authService = new AuthService();
