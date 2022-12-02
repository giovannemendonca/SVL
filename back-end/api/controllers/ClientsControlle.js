const db = require("../models");

class ClientsControllers {
  static async createClient(req, res) {
    try {
      const body = req.body;
      const newClient = await db.Clients.create(body);;
      res.status(200).json(newClient);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getClientsAll(req, res) {
    try {
      const { id } = req.params;
      const client = await db.Clients.findOne({
        where: {
          id: Number(id),
        },
      });

      if(!client) return res.status(404).json({message: "Cliente não encotrado"})
      res.status(200).json(client);
    } catch (erro) {
      res.status(500).json(erro.message);
    }
  }
}

module.exports = ClientsControllers;
