const { sign } = require('jsonwebtoken');
const { User  } = require('../models/User');
const { config } = require('dotenv');
const { auth } = require('../middleware/auth');
config();

class UserController{


    async getAllUsers(request, response){
        try {
            const data = await User.findAll()
            return response.status(200).send(data)
        } catch (error) {
            return response.status(400).send(
                {
                    message: "Falha na operação de listar usuários",
                    cause: error.message
                }
            )
        }
    }


    async createOneUser(request, response){

        try {
            const {
                traineeId,
                name,
                email,
                password
            } = request.body;
    
             const data = await User.create({
                traineeId,
                name,
                email,
                password
            })
    
            return response.status(201).send(data)
        } catch (error) {
            return response.status(400).send(
                {
                    message: "Falha na operação de criar usuário",
                    cause: error.message
                }
            )
        }

        
    }

    async loginUser(request, response) {
        try {            
            const {
                email,
                password
            } = request.body;
    
            console.log(request.body)
            
            const user = await User.findOne({
                where:{email:email}
            })

            console.log(user)
    
            if (user.password === password){
                const payload = {"email": user.email}

                console.log(process.env.SECRET_JWT)

                const token = sign(payload, process.env.SECRET_JWT, {expiresIn: "1h"})
                console.log(token)
                console.log("Senha Igual")
                return response.status(200).send({token}) 
            }
            else {
                console.log("Senha Diferente")
                return response.status(400).send({"msg": "Senha Invalida"})
            }
        } catch (error) {
            return response.status(401).send({
                    message: "Tentativa de Login Falhou",
                    cause: error.message})
        }
    }
}

module.exports = new UserController()