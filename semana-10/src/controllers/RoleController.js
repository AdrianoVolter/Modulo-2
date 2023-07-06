const Roles = require('../models/Roles');

module.exports = {

    async index(req, res){
        try {
            const data = await Roles.findAll()
            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send(
                {
                    message: "Falha na operação de listar roles",
                    cause: error.message
                }
            )
        }
    },

    async store(req, res){
        try {
            const data = await Roles.create(req.body)
            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send(
                {
                    message: "Falha na operação de criar role",
                    cause: error.message
                }
            )
        }
    }
}
