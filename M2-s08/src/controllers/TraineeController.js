const Trainees = require('../models/Trainee');

module.exports = {
    async index(req, res) {
        const trainees = await Trainees.findAll();

        if (!trainees) {
            return res.status(400).json({ error: 'Trainees not found' });
        }else {
            return res.json({ message: 'Trainees found', trainees });
        }
    },
};
