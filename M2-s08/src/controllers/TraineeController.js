const Trainees = require('../models/Trainee');
const Sequelize = require('sequelize');

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

        const traineeExists = await Trainees.findOne({ where: { 
            [Sequelize.Op.or]: [{cpf: req.body.cpf}, {rg: req.body.rg}]
         } });

        if (traineeExists) {
            return res.status(400).json({ error: 'Trainee already exists' });
        }

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
    },
    //get by id
    async show(req, res) {
        const { id } = req.params;

        const trainee = await Trainees.findByPk(id);

        if (!trainee) {
            return res.status(400).json({ error: 'Trainee not found' });
        }else {
            return res.json({ message: 'Trainee found', trainee });
        }
    },
    //update
    async update(req, res) {
        const { id } = req.params;

        const trainee = await Trainees.findByPk(id);

        if (!trainee) {
            return res.status(400).json({ error: 'Trainee not found' });
        }

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

        const traineeExists = await Trainees.findOne({ where: { 
            [Sequelize.Op.or]: [
                {cpf: req.body.cpf},
                {rg: req.body.rg},
                {name: req.body.name},
                ],
            [Sequelize.Op.not]: [{id: req.params.id}]
         } });

        if (traineeExists) {
            return res.status(400).json({ error: 'Trainee already exists' });
        }

        const traineeUpdated = await trainee.update({ 
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

        if (!traineeUpdated) {
            return res.status(400).json({ error: 'Trainee not updated' });
        }else {
            return res.json({ message: 'Trainee updated', traineeUpdated });
        }
    }
};
