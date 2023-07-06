const { INTEGER, STRING, DATE } = require('sequelize')
const { connection } = require('../database/connection')
//const User_role = require('./Users_roles.js');


const User = connection.define("users", {
    traineeId: {
        type: INTEGER,
        references: {
            model: {
                tablename: 'trainee',
            },
            key: 'id'
        },
        allowNull: true
    },
    name: STRING,
    email: {
        type: STRING,
        validate:{
            isEmail: {msg: "Email Invalido"}
        },
        unique: {msg: "Email já existe"}
    },
    password: {
        type: STRING,
        validate:{
            len:{args:[1,100], msg: "Senha precisa ter entre 5 a 10 char."}
            // is: {args: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$",
            //msg: "Senha muito fraca"}
        }
    },
    createdAt: DATE,
    updatedAt: DATE
})





module.exports = { User }
