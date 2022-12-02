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



router.post("/clients", verifyJWT, clientsControllers.createClient);
router.get("/clients/:id", verifyJWT, clientsControllers.getClientsAll);



module.exports = router;
