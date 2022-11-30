const db = require("../models");
const CryptoUser = require("../crypto/cryptoUser.js");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const SECRET = "secret";

function cryptoPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

class UserControllers {
  //Criar Usuário
  static async createUser(req, res) {
    try {
      const { user, email, cpf, password } = req.body;
      const newUser = new CryptoUser(user, email, cpf, password);
      const userCreated = await db.Users.create(newUser);
      res
        .status(200)
        .json({ message: "Usuario cadastrado", user: userCreated });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Valida Usuário e retorna o token
  static async validateToken(req, res) {
    const user = req.body.user;
    const password = cryptoPassword(req.body.password);

    try {
      const isUser = await db.Users.findOne({
        where: {
          user: user,
          password: password,
        },
      });

      if (!isUser) {
        return res.status(401).json({ message: "Usuario não encontrado" });
      }
      const token = jwt.sign({ id: isUser.id }, SECRET, {
        expiresIn:1000 
      });
      res.status(200).json({ token: token, id: isUser.id });
    } catch (error) {
      res.status(200).json(error.message);
    }
  }



  //Retorna o usuário que esta logado se estiver autenticado
  static async getUser(req, res) {
    const id = req.body.id;
    try {
      const user = await db.Users.findOne({ where: { id: Number(id) } });
      res.status(200).json({ username: user.user, id: user.id });

    } catch (error) {
      res.status(500).json(error.message);
    }
  }


}

module.exports = UserControllers;
