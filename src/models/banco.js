import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME || '', 
    process.env.DB_USER || '', 
    process.env.DB_PASSWORD || '', 
    {
        host: process.env.DB_HOST || 'localhost', 
        dialect: 'mysql', 
        port: Number(process.env.DB_PORT) || 3306, 
    }
);

export const Projeto = sequelize.define('projetos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url_projeto: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'projetos',
    timestamps: true,
});

sequelize.sync({ force: false, alter: false  })

export default sequelize;
