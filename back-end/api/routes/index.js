const bodyParser = require('body-parser')
const user = require('./usersRoute')
const cors = require("cors");

module.exports = (app) => {

    app.use(
        cors()

    )

    app.use(
        bodyParser.json(),
        user
    );

    app.get('/', (req, res) => {
        res.status(200).json({message: 'Olá mundo'})
    })
};