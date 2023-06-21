const { config } = require('dotenv');

config();
//console.log(process.env);

module.exports={
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    username: process.env.USERNAMEDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE,
    port: process.env.PORT,

};