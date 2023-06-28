const Company = require('../models/Company');
const Sequelize = require('sequelize');

module.exports = {
    async index(req, res) {
        const companies = await Company.findAll();

        if (!companies) {
            return res.status(400).json({ error: 'Companies not found' });
        }else {
            return res.json({ message: 'Companies found', companies });
        }
    }
}