module.exports = {

// Utilizando o arquivo user.json fornecido no repositório de exemplo, crie um endpoint do tipo GET que deverá retornar os dados de acordo com o filtro aplicado na Query da requisição.

// Utilize os seguintes critérios no filtro:

// ageMin
// ageMax
// State
// Job

    async retornaDados(req, res) { //recebe o body da requisição
        const fs = require('fs');

        const { ageMin, ageMax, state, job } = req.query;

        const data = fs.readFileSync('src/database/user (1).json', 'utf8');
        const users = JSON.parse(data);

        const usersFiltered = users.filter(user => {
            if (ageMin && user.age < ageMin) return false;
            if (ageMax && user.age > ageMax) return false;
            if (state && user.state !== state) return false;
            if (job && user.job !== job) return false;
            return true;
        }   
        );

        res.send(usersFiltered);
    }
}