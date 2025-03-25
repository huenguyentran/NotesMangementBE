import { DataTypes, Model, Sequelize } from "sequelize";
import { User } from "./user.model";

export class Note extends Model {
    declare note_id: number;
    declare user_id: number;
    declare title: string;
    declare content: string;

    static initModel(sequelize: Sequelize)
    {
        Note.init({
            note_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: User,
                    key: 'user_id'
                }
            },

            title: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            content: {
                type: DataTypes.TEXT,
            }


        }, {
            sequelize,
            tableName: 'notes',
            modelName: 'Note',
            timestamps: true,
        })

    }

}