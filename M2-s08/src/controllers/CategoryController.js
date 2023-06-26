const Category = require('../models/category');

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll({
      attributes: ['id', 'name', 'created_at', 'updated_at'],
    });
        return res.json(categories);
    },
};









        

