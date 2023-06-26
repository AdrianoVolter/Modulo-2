const Category = require('../models/category');

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll({
      attributes: ['id', 'name', 'created_at', 'updated_at'],
    });

    if(!categories){
      return res.status(400).json({ error: 'Categories not found' });
    }else{
      return res.json({menssage: 'Categories found', categories});
    }
  },
    
};









        

