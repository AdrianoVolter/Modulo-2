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













// module.exports = {
//     // Crie um endpoint do tipo PUT para efetuar a alteração de um arquivo JSON. No 'params' da requisição deverá ser passado o ID, e no 'body' um JSON com os valores que serão substituídos. Realize uma verificação nos valores atuais comparando com os novos, caso seja diferente, realize a alteração, caso contrário, informe que não há nada para alterar. Se o ID não estiver disponível na lista, apresente o código http apropriado.
//     async alterarJson(req, res) { //recebe o body da requisição

//         const fs = require('fs'); //importa o módulo fs
//         const id = parseInt(req.params.id); //recebe o id da requisição
//         const body = req.body; //recebe o body da requisição

//         fs.readFileSync('src/database/user (1).json', 'utf8', (err, data) => { //lê o arquivo json
//             if (err) {
//                 console.log("Erro ao ler o arquivo", err); //se der erro, retorna o erro

//                 return res.status(500).json({ error: "Internal Server Error" }); //retorna o erro
//             }

//             let lista = JSON.parse(data); //converte o arquivo json em objeto
    
//             if (lista[id] == undefined) { //se o id não existir na lista
//                 return res.status(404).json({ error: "ID não encontrado" }); //retorna o erro

//             } else if (lista[id] != body) { //se o id existir na lista e for diferente do body
//                 lista[id] = body; //altera o id da lista pelo body
//                 fs.writeFileSync('src/database/user (1).json', JSON.stringify(lista)
//                 ); //escreve o arquivo json
//                 return res.status(200).json({ message: "Alterado com sucesso" }); //retorna a mensagem de sucesso
//             }   
//             else { //se o id existir na lista e for igual ao body
//                 return res.status(200).json({ message: "Não há nada para alterar" }); //retorna a mensagem de erro

                
//             }
//         }  ,  )  
//     } 

// }

