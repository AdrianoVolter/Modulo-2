const { sign } = require('jsonwebtoken');
const { User  } = require('../models/User');
const { config } = require('dotenv');
const { verify } = require('jsonwebtoken');


config();

class UserController{


    async getAllUsers(req, res){
        try {
            const data = await User.findAll()


            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send(
                {
                    message: "Falha na operação de listar usuários",
                    cause: error.message
                }
            )
        }
    }


    async createOneUser(req, res){

        try {
            const {
                traineeId,
                name,
                email,
                password
            } = req.body;
    
             const data = await User.create({
                traineeId,
                name,
                email,
                password
            })
    
            return res.status(201).send(data)
        } catch (error) {
            return res.status(400).send(
                {
                    message: "Falha na operação de criar usuário",
                    cause: error.message
                }
            )
        }

        
    }

    async loginUser(req, res) {
        try {            
            const { email, password } = req.body;
            console.log(req.body)

            const user = await User.findOne({ where:{email:email}})
            console.log(user)
    
            if (user.password === password){
                const payload = {"email": user.email}

                const token = sign(payload, process.env.SECRET_JWT, {expiresIn: 300})
                console.log(token)
                console.log("Senha Igual")
                return res.status(200).send({token}) 
            }
            else {
                console.log("Senha Diferente")
                return res.status(400).send({"msg": "Senha Invalida"})
            }
        } catch (error) {
            return res.status(401).send({
                    message: "Tentativa de Login Falhou",
                    cause: error.message})
        }
    }

    async verifyToken(req, res, next) {
        try {
            console.log("Verificando Token")
            const token = req.headers['x-access-token'];
            console.log(req.headers)
            console.log(token)

            if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
            
            const decoded = verify(token, process.env.SECRET_JWT);
            console.log(decoded)
            req.userId = decoded.id;
            console.log("Token Verificado")
            next();
        } catch (error) {
            return res.status(401).send({
                message: "Falha na operação de verificar token",
                cause: error.message
            })
        }
    }

    

}

module.exports = new UserController()