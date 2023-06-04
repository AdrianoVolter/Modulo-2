const fs = require('fs');

module.exports = {
  async alterarJson(req, res) {
    const id = parseInt(req.params.id);
    const body = req.body;

    fs.readFile('src/database/user (1).json', 'utf8', (err, data) => {
      if (err) {
        console.log("Erro ao ler o arquivo", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      let lista = JSON.parse(data);

      if (lista[id] === undefined) {
        return res.status(404).json({ error: "ID não encontrado" });
      } else {
        const objetoExistente = lista[id];

        if (saoObjetosIguais(objetoExistente, body)) {
          return res.status(200).json({ message: "Não há nada para alterar" });
        } else {
          lista[id] = body;
          fs.writeFile('src/database/user (1).json', JSON.stringify(lista), (err) => {
            if (err) {
              console.log("Erro ao escrever o arquivo", err);
              return res.status(500).json({ error: "Internal Server Error" });
            }
            return res.status(200).json({ message: "Alterado com sucesso" });
          });
        }
      }
    });
  }
};

function saoObjetosIguais(objeto1, objeto2) {
  const propsObjeto1 = Object.getOwnPropertyNames(objeto1);
  const propsObjeto2 = Object.getOwnPropertyNames(objeto2);

  if (propsObjeto1.length !== propsObjeto2.length) {
    return false;
  }

  for (let i = 0; i < propsObjeto1.length; i++) {
    const prop = propsObjeto1[i];
    if (objeto1[prop] !== objeto2[prop]) {
      return false;
    }
  }

  return true;
}


