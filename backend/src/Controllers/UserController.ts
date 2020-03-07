import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const user = [
    { name: "Allan", email: "allan_creative@hotmail.com"}
]

export default {
    async index(req: Request, res: Response){
        return res.json(user)
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService()

        emailService.sendMail({ 
            to: { name: 'Allan', email: 'Ola@hotmail.com' }, 
            message: { subject: 'Testes maneiros com typescript', body: 'Welcomeee'}
        });
        return res.send()

    }
}