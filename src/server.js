import express from 'express'
import sequelize from './models/banco.js'
import projetos from './routes/projetos.js'
import email from './routes/email.js'
const app = express()
const PORT = 8801

app.use(express.json())
app.use("/portifolio", projetos)
app.use("/email", email)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {});
}).catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
});