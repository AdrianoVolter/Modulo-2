const Category = require('../models/Category');


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
       }
  
};









        

