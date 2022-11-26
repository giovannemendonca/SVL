const { Router } = require("express");
const userControllers = require("../controllers/UserController.js");
const jwt = require("jsonwebtoken");
const router = Router();


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

router.get("/users", verifyJWT, userControllers.searchUser);
router.post("/users/register", userControllers.createUser);
router.post("/users/login", userControllers.validateUser);

module.exports = router;
