const { Router } = require("express");
const clientsControllers = require("../controllers/ClientsControlle");
const router = Router();
const jwt = require("jsonwebtoken");

const SECRET = "secret";

function verifyJWT(req, res, next) {
  const token = req.headers["x-acess-token"];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json(err.message);
    }
    req.user = decoded.user;
    next();
  });
}

router.get("/clients", verifyJWT, clientsControllers.getClientsAll);
router.put("/clients", verifyJWT, clientsControllers.updateClients);
router.post("/clients", verifyJWT, clientsControllers.createClient);
router.post("/clients/cpf", verifyJWT, clientsControllers.getClientsToCpf);

module.exports = router;
