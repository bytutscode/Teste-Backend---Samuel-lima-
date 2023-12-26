import sequelize from "../database/sequelize";
import { Model, DataTypes } from "sequelize";

export interface Product extends Model {
    id: number,
    name: string,
    category: string,
    status: string,
    quantity: number
}

export const Product = sequelize.define<Product>('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'ACTIVE' },
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 }
},
    {
        tableName: 'products',
        timestamps: true,
        paranoid: true
    }
)


export default Product;