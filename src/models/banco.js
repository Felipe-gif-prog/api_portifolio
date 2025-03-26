import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "mysql",
    logging: false, 
});

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
.then(() => {
    console.log('Banco sincronizado!')
})
.catch((err) => {
    console.log('Erro ao syncronizar', err)
})

export default sequelize;
