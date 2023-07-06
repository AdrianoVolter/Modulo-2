const Permission = require('../models/Permission');

module.exports = {
    async index(req, res) {
        try {
            const permissions = await Permission.findAll();
            return res.status(200).json(permissions);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async store(req, res) {
        try {
            const { description } = req.body;
            const permission = await Permission.create({ description });
            return res.status(201).json(permission);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}