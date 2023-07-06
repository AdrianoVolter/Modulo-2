const Permission_role = require('../models/Permissions_roles');

module.exports = {
    async index(req, res) {
        try {
            const permission_role = await Permission_role.findAll();
            return res.status(200).json(permission_role);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async store(req, res) {
        try {
            const { role_id, permission_id } = req.body;
            const permission_role = await Permission_role.create({ role_id, permission_id });
            return res.status(201).json(permission_role);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}