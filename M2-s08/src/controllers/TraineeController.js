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
    async store(req, res) {
        const { 
            name, 
            email, 
            rg, 
            cpf, 
            primary_phone_contact, 
            secondary_phone_contact, 
            date_birth, 
            father_name, 
            mother_name, 
            have_special_needs
         } = req.body;

        const trainee = await Trainees.create({ 
            name, 
            email, 
            rg, 
            cpf, 
            primary_phone_contact, 
            secondary_phone_contact, 
            date_birth, 
            father_name, 
            mother_name, 
            have_special_needs 
        });

        if (!trainee) {
            return res.status(400).json({ error: 'Trainee not created' });
        }else {
            return res.status(201).json({ message: 'Trainee created', trainee });
        }
    }
};
