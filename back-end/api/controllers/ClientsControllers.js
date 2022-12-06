const db = require("../models");

class ClientsControllers {


//Cria um novo cliente

  static async createClient(req, res) {
    try {
      const body = req.body;
      const { cpf } = req.body;

      const isClient = await db.Clients.findOne({
        where: {
          cpf: cpf,
        },
      });
      if (isClient) throw new Error("Cliente Já Cadastrado");
      const newClient = await db.Clients.create(body);
      res.status(200).json({ message: "Cliente cadastrado com sucesso!!!" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Pega todos os clientes
  static async getClientsAll(req, res) {
    try {
      const clients = await db.Clients.findAll();

      if (!clients)
        return res.status(404).json({ message: "Nenhum cliente encontrado" });
      res.status(200).json(clients);
    } catch (erro) {
      res.status(500).json(erro);
    }
  }

  //Pega Cliente por CPF

  static async getClientsToCpf(req, res) {
    try {
      const { cpf } = req.body;
      const client = await db.Clients.findOne({
        where: {
          cpf: cpf,
        },
      });
      if (!client) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }
      return res.status(200).json(client);
    } catch (error) {
      console.log(error);
    }
  }

  //Atualizar Clientes
  static async updateClients(req, res) {
    try {
      const { id } = req.body;
      const data = req.body;

      await db.Clients.update(data, { where: { id: id } });
      res.status(200).json({ message: "Alterações salvas com sucesso" });
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }
}

module.exports = ClientsControllers;
