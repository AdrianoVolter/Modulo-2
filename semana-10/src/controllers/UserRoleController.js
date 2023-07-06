const User_role = require('../models/Users_roles');
//const Roles = require('../models/Roles');
//const User = require('../models/User');

module.exports = {

    async index(req, res){
        try {
            const data = await User_role.findAll({
                // include: [
                //     {
                //         model: Roles,
                //         as: 'role'
                //     },
                //     {
                //         model: User,
                //         as: 'user'
                //     }
                // ]
            })
            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send(
                {
                    message: "Falha na operação de listar users_roles",
                    cause: error.message
                }
            )
        }
    },

    async store(req, res){
        try {
            const data = await User_role.create(req.body)
            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send(
                {
                    message: "Falha na operação de criar user_role",
                    cause: error.message
                }
            )
        }
    },

}