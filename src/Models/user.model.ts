import { DataType, DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize";
import bcrypt from 'bcrypt'
import sequelize from "sequelize";

export class User extends Model {
    declare user_id: number;
    declare email: string;
    declare password: string;

    async checkPassword(password: string)
    {
        return bcrypt.compare(password, this.password);
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
                allowNull: false,
                unique: true
            },
        
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'User'
        })
    }
}
