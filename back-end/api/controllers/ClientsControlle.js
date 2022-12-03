const db = require("../models");

class ClientsControllers {
  static async createClient(req, res) {
    try {
      const body = req.body;
      const newClient = await db.Clients.create(body);
      res.status(200).json(newClient);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getClientsAll(req, res) {
    try {
      const clients = await db.Clients.findAll();

      if (!clients)
        return res.status(404).json({ message: "Nenhum cliente encontrado" });
      res.status(200).json(clients);
    } catch (erro) {
      res.status(500).json(erro.message);
    }
  }


  //Atualizar Clientes
  static async updateClients(req, res) {
    try {
      const { id } = req.body;
      const data = req.body;

      await db.Clients.update(data, {where: { id: id, },
      });
      console.log(id)
      res.status(200).json({ message: "Alterações salvas com sucesso" });
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }
}

module.exports = ClientsControllers;
