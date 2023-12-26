import sequelize from "../database/sequelize";
import { Model, DataTypes } from "sequelize";

export interface Municipality extends Model {
    id: number,
    name: string,
}

export const Municipality = sequelize.define<Municipality>('Municipality', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
},
    {
        tableName: 'municipalities',
        timestamps: false
    }
)


export default Municipality;