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
    }
  }
  