const { Router } = require("express");
const booksControllers = require("../controllers/BooksControllers");
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

router.post("/books", verifyJWT, booksControllers.createBooks);
router.get("/books", verifyJWT, booksControllers.getBooks);
router.get("/books/:id", verifyJWT, booksControllers.getBookToID)
router.put("/books", verifyJWT, booksControllers.updateBooks)
module.exports = router;
