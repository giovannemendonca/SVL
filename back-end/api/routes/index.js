const bodyParser = require('body-parser')
const user = require('./usersRoute')

module.exports = (app) => {

    app.use(
        bodyParser.json(),
        user

    );

    app.get('/', (req, res) => {
        res.status(200).json({message: 'Olá mundo'})
    })
};