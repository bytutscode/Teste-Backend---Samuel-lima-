import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
    process.env.POSTGRES_DB as string,
    process.env.POSTGRES_USERNAME as string,
    process.env.POSTGRES_PASSWORD as string, {
    dialect: 'postgres',
    logging: false,
    dialectModule: require('pg'),
    host: process.env.POSTGRES_HOST
});


export default sequelize;