const Category = require('../models/Category');
const { verify } = require('jsonwebtoken')
const { config } = require('dotenv')
//const { CategoryServices } = require('../services/CategoryService')

config()

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll();

    if(!categories){
      return res.status(400).json({ error: 'Categories not found' });
    }else{
      return res.json({menssage: 'Categories found', categories});
    }
       },
  async store(req, res) {
    
    const { name } = req.body;

    const category = await Category.create( {name});

    if(!category){
      return res.status(400).json({ error: 'Category not created' });
    }else{
      return res.status(201).json({menssage: 'Category created', category});
    }
       },

  async listOneCategory (req, res) {

    const { Authorization } = req.headers
    console.log(Authorization)
    console.log(verify(Authorization, process.env.SECRET))


    if (verify(Authorization, process.env.SECRET)) {
      const { id } = req.params

      const data = await Category.findByPk(id)

      return res.status(200).send(data)
    }
    else {
      return res.status(401).send({"msg": "Acesso Negado"})
    }
    
  },

  // async updateOneCategory (request, response) {
  //   const { id } = request.params
  //   const { name } = request.body
    
  //   await Category.update(
  //     { name },
  //     { where: { id }}
  //   )

  //   return response.status(204).send()
  // }
  
};









        

