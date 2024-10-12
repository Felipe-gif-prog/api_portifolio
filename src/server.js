import express from 'express'
import sequelize from './models/banco.js'
import projetos from './routes/projetos.js'
import email from './routes/email.js'
import cors from 'cors'
const app = express()
const PORT = 8801

app.use(express.json())
app.use(cors())
app.use(cors({
    origin: '*'
}))
app.use("/portifolio", projetos)
app.use("/email", email)

app.get("/", (req, res) => {
    res.send("Minha api de portifólio")
})

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {});
}).catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
});