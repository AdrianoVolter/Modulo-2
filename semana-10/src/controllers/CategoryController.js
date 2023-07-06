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
    const { id } = req.params
    const category = await Category.findByPk(id)

    if(!category){
      return res.status(400).json({ error: 'Category not found' });
    }else{
      return res.json({menssage: 'Category found', category});
    }
       }
    
  

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









        

