const Category = require('../models/category');

module.exports = {
  async index(req, res) {
    try {
      const categories = await Category.findAll();

      if (!categories || categories.length === 0) {
        return res.status(404).json({ error: 'No categories found' });
      }

      return res.json(categories);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};






        

