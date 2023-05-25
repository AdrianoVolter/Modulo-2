module.exports = {
    async index(req, res) {

        return res.status(200).send ({usuarios: [{
            "id": 1,
            "name": "Pedro",
            "age": 25,
            "job": "Developer",
            "state": "Santa Catarina"
          }]
      })
    }
  }

       