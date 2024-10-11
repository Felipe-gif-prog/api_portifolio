import express from 'express'
import nodemailer from 'nodemailer'
import { emailHTML } from '../views/templateEmail.js'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post("/enviar", (req, res) => {

    const { email } = req.body

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        }
    })


    transport.sendMail({
        from: process.env.MY_EMAIL,
        to: email,
        subject: 'Apresentação - Felipe',
        html: emailHTML
    }).then(() => {
        res.status(200).send("Email enviado com sucesso")
    }).catch((err) => {
        res.status(500).send("Deu errado", err)
    })
})

export default router
