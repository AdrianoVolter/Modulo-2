module.exports = {
    
    async enviarJson(req, res) { //recebe o body da requisição
        const fs = require('fs');
        const caminho = 'src/database/arquivo.json';
        let listaJson = [];
    
        if (fs.existsSync(caminho)) { //verifica se o arquivo existe
          const data = fs.readFileSync(caminho);
          listaJson = JSON.parse(data);
        }
    
        listaJson.push(req.body); //adiciona o novo produto no array

        fs.writeFileSync(caminho, JSON.stringify(listaJson)); //salva o arquivo
    
        res.status(200).send('Arquivo salvo com sucesso!'); //retorna uma mensagem de sucesso
      },
    }

