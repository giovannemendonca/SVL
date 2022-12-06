const bodyParser = require("body-parser");
const user = require("./usersRoute");
const client = require("./clientsRoute");
const book = require("./booksRoutes");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());

  app.use(bodyParser.json(), user, client, book);

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Olá mundo" });
  });
};
