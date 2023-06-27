const Category = require('../models/category');

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll(
    );

    if(!categories){
      return res.status(400).json({ error: 'Categories not found' });
    }else{
      return res.json({menssage: 'Categories found', categories});
    }
  },

  async store(req, res) {
    const { name } = req.body;
    const created_at = new Date();
    const updated_at = new Date();
    const category = await Category.create({ name, created_at, updated_at });
    if(!category){
      return res.status(400).json({ error: 'Category not created' });
    }else{
      return res.json({menssage: 'Category created', category});
    }
  }
};









        

