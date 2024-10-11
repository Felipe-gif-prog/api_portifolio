import express from 'express'
import { Projeto } from '../models/banco.js'

const router = express.Router()

router.get("/projetos", async (req, res) => {
    try {
        const resposta = await Projeto.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.status(200).json((resposta))
    } catch (err) {
        res.send({messsage: 'Erro ao listar projetos', err})
    }
})

router.post("/projetos/cadastrar", async (req, res) => {
    try {
        const { nome, imagem, url_projeto } = req.body

        Projeto.create({
            nome,
            imagem,
            url_projeto,
        })

        res.send({message: "Projeto cadastrado com sucesso"})
    } catch (err) {
        res.send({message: 'Erro ao cadastrar projeto', err})
    }
})

export default router



