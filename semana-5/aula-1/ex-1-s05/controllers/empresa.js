module.exports = {

    async verificarEmpresa(req, res, proximo) {
      console.log(req.headers.cnpj)
      if(!req.headers.cnpj){
        return res.status(400).send({erro: "A empresa não é verídica!"})
      }
      console.log("Essa empresa é véridica!")
      proximo()
    },
    async criarEmpresa(req, res) {
      return res.status(200).send({mensagem: "Criou uma empresa!"})
    },

    async salvarEmpresa(req, res) {
      const fs = require("fs")
      const {cnpj, nomeFantasia, dataDeCriacao} = req.body
      if(!cnpj || !nomeFantasia || !dataDeCriacao){
        return res.status(400).send({erro: "Faltam campos!"})
      }
      const novaEmpresa = { cnpj, nomeFantasia, dataDeCriacao }

      if(fs.existsSync("empresas.json") === false){
        fs.writeFile("empresas.json", JSON.stringify([novaEmpresa]), (err) => {
          if(err){
            return res.status(400).send({erro: err})
          }
          console.log("Arquivo criado com sucesso!")
        })
        return res.status(200).send({mensagem: "Empresa salva com sucesso!"})
      }

      fs.readFile("empresas.json", "utf8", (err, data) => {
        if(err){
          return res.status(400).send({erro: err})
        }
        const empresas = JSON.parse(data)
        empresas.push(novaEmpresa)
        fs.writeFile("./empresas.json", JSON.stringify(empresas), (err) => {
          if(err){
            return res.status(400).send({erro: err})
          }
          console.log("Arquivo atualizado com sucesso!")

        })
        return res.status(200).send({mensagem: "Empresa salva com sucesso!"})
      })



    }


  }
  