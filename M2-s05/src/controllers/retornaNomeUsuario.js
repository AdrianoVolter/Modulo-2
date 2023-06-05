const fs = require('fs');

module.exports = {
    async retornaNomeUsuario(req, res) {
        const id = parseInt(req.params.id);
        fs.readFile('src/database/user (1).json', 'utf8', (err, data) => {
            if (err) {
                console.log("Erro ao ler o arquivo", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            let lista = JSON.parse(data);

            const usuario = lista.find(u => u.id === id);
           if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            } else {
                return res.status(200).json({ nome: usuario.name });
            }

        }
        );
    }
}