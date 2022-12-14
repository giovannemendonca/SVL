const { Router } = require("express");
const userControllers = require("../controllers/UserControllers.js");
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

router.post("/login", userControllers.validateToken);
router.post("/login/users", verifyJWT, userControllers.getUser);
router.post("/users/register",verifyJWT, userControllers.createUser);




module.exports = router;
