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
    },

    async store(req, res) {

        try {
            const { 
                cnpj, 
                company_name, 
                contact, 
                cep, 
                address, 
                neighborhood, 
                city, 
                state, 
                number, 
                complement, 
                rh_analyst_name, 
                supervisor_name 
            } = req.body;

            const companyExists = await Company.findOne({ where: { 
                [Sequelize.Op.or]: [{cnpj: req.body.cnpj}, {company_name: req.body.company_name}]
            } });

            if (companyExists) {
                return res.status(400).json({ error: 'Company already exists' });
            }

            const company = await Company.create({ 
                cnpj, 
                company_name, 
                contact, 
                cep, 
                address, 
                neighborhood, 
                city, 
                state, 
                number, 
                complement, 
                rh_analyst_name, 
                supervisor_name 
            });
            
            if (!company) {
                return res.status(400).json({ error: 'Company not created' });
            }else {

                return res.status(201).json({ message: 'Company created', company });
                
            }
        } catch (error) {
            return res.status(400).json({ error: 'Company not created , error: ' + error });
        }
    },

    //get by id
    async show(req, res) {
        try {
            const { id } = req.params;
            const company = await Company.findByPk(id);
            if (!company) {
                return res.status(400).json({ error: 'Company not found' });
            }else {
                return res.json({ message: 'Company found', company });
            }
        } catch (error) {
            return res.status(400).json({ error: 'Company not found , error: ' + error });
        }
    },
}