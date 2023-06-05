const fs = require('fs');

module.exports ={

    async deletarJson(req, res){
       
        const id = parseInt(req.params.id);
       // console.log(id);
        fs.readFile('src/database/user (1).json', 'utf8', (err, data) => {
            if (err) {
                console.log("Erro ao ler o arquivo", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            let lista = JSON.parse(data);

            if (lista[id] === undefined) {
                return res.status(404).json({ error: "ID não encontrado" });
            } else {
                lista.splice(id, 1);
                fs.writeFile('src/database/user (1).json', JSON.stringify(lista), (err) => {
                    if (err) {
                        console.log("Erro ao escrever o arquivo", err);
                        return res.status(500).json({ error: "Internal Server Error" });
                    }
                    return res.status(200).json({ message: "Deletado com sucesso" });
                });
            }
        }
        );
    }
}
       
