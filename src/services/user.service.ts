import { User } from "../Models/user.model";

class UserService {
    getAllUser = async () => {
        const users = await User.findAll({
            attributes: ['user_id', 'email']
        });
        return users;
    }

    getUserByID = async (userid: number) => {
        //chiu deo biet

        //const user = await User.findByPk(userid);
        // const user = await User.findOne({
        //     where: {user_id: userid},
        //     attributes: ['user_id', 'email']
        // });
        //return user;
    }

    updateUser = async (userID: number, newData: Partial<User>) => {
        const user = await User.update(newData, { where: {user_id: userID}});
    }
}

export const userService = new UserService;