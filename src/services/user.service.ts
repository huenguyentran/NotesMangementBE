import { User } from "../Models/user.model";

class UserService {
    getAllUser = async () => {
        const users = await User.findAll();
        return users;
    }
}

export const userService = new UserService;