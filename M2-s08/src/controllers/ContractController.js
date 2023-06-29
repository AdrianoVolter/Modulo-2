const Contract = require('../models/Contract');
const Trainee = require('../models/Trainee');
const Company = require('../models/Company');
const Category = require('../models/Category');
const Sequelize = require('sequelize');

module.exports = {

    async index (req, res) {
        try {
            const contracts = await Contract.findAll({
               order: [['id', 'DESC']],
                include: [
                    { model: Trainee, as: 'trainee'},
                    { model: Company, as: 'company'},
                    { model: Category, as: 'category'}
                    
                ]
            });
            return res.status(200).json({ 
                message: 'All contracts',
                contracts });
        } catch (error) {
            console.log(error); // Log the actual error to the console
            return res.status(400).json({ error: 'An error occurred while fetching contracts' });
        }
    },

    async store (req, res) {
        try {
            const { 
                trainee_id, 
                category_id, 
                company_id, 
                start_validity, 
                end_validity, 
                status, 
                remuneration, 
                extra 
            } = req.body;

            const contractExists = await Contract.findOne({ where: { 
                [Sequelize.Op.or]: [{trainee_id: req.body.trainee_id}, {company_id: req.body.company_id}]
            } });

            if (contractExists) {
                return res.status(400).json({ error: 'Contract already exists' });
            }

            const contract = await Contract.create({ 
                trainee_id, 
                category_id, 
                company_id, 
                start_validity, 
                end_validity, 
                status, 
                remuneration, 
                extra 
            });
            
            if (!contract) {
                return res.status(400).json({ error: 'Contract not created', contract });
            }else {
                return res.status(201).json({ message: 'Contract created', contract });
            }
        } catch (error) {
            return res.status(400).json({ error: 'This contract not CREATED' });
        }
    }
}