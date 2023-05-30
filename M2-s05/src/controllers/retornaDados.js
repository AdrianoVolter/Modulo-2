module.exports = {


    async retornaDados(req, res) { //recebe o body da requisição

        const fs = require('fs');
        const { ageMin, ageMax, state, job } = req.query; //recebe o body da requisição
        const data = fs.readFileSync('src/database/user (1).json', 'utf8'); //lê o arquivo json
        const users = JSON.parse(data); //converte o arquivo json em objeto

        const usersFiltered = users.filter(user => { //filtra os dados do arquivo json

            if (ageMin && user.age < ageMin) return false; //se a idade for menor que a idade mínima, retorna false

            if (ageMax && user.age > ageMax) return false; //se a idade for maior que a idade máxima, retorna false

            if (state && user.state !== state) return false; //se o estado for diferente do estado informado, retorna false

            if (job && user.job !== job) return false; //se o trabalho for diferente do trabalho informado, retorna false

            return true; //se não for nenhum dos casos acima, retorna true
        }   
        );

        res.send(usersFiltered); //retorna os dados filtrados
    }
};
