const { Router } = require("express");
const orderControllers = require("../controllers/OrdersControllers");
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

router.post("/order", verifyJWT, orderControllers.createOrder);

module.exports = router;
