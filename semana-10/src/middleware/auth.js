const { config } = require('dotenv');
const { verify } = require('jsonwebtoken');
config();


module.exports = {

    async  auth(req, res , next){

    try {
            
            const { Authorization } = req.headers
            console.log(Authorization)
            console.log(verify(Authorization, process.env.SECRET))

            if(verify(Authorization, process.env.SECRET)){
                next()
            }else{
                return res.status(401).json({ error: 'Unauthorized' });
            }
    }
            catch (error) {
                console.log("ERROR  " + error)
                return res.status(401).json({ 
                    error: 'Unauthorized',
                    cause: error.message

            });
        }

    }

}
