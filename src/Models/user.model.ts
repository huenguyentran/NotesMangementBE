import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize'
import bcrypt from 'bcrypt';

export class User extends Model {
    declare user_id?: number;
    declare email: string;
    declare password: string;

    async checkPassword(password: string)
    {
        return await bcrypt.compare(password, this.password);
    }

    static initModel(sequelize: Sequelize)
    {
        User.init({
            user_id: {
                type: DataTypes.INTEGER, 
                autoIncrement: true, 
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
            }, {
                sequelize,
                modelName: 'User',
                tableName: 'users', // ✅ Nên đặt tên bảng rõ ràng
            }
        )
    }
}
