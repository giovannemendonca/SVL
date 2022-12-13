const db = require("../models");

class OrdersControllers {


  static async createOrder(req, res) {

    //Criar um novo Pedido
    try {
      const body = req.body;

      const idCliente = body.id;
      const cpf = body.cpf;
      const nomeCliente = body.nome;
      const idLivro = body[0].id;
      const tituloLivro = body[0].livro;
      const quantidade = body[0].quantidade;
      const valor = body[0].valorUnidade;
      const valorTotal = body[0].valorFinal;

      const newOrder = {
        idCliente: idCliente,
        cpf: cpf,
        nomeCliente: nomeCliente,
        idLivro: idLivro,
        tituloLivro: tituloLivro,
        quantidade: quantidade,
        valor: valor,
        valorTotal: valorTotal,
      };
      const orderCreate = await db.Orders.create(newOrder);
      if (orderCreate) {
        const book = await db.Books.findOne({
          where: {
            id: idLivro,
          },
        });
        const qtdAnterior = book.quantidade;
        const novaquantidade = Number(qtdAnterior) - Number(quantidade);

        await db.Books.update(
          { quantidade: novaquantidade },
          {
            where: {
              id: idLivro,
            },
          }
        );
        return res.status(200).json({message: 'Livro cadastrado com sucesso!'});
      }
      res.status(200).json(orderCreate);
    } catch (error) {
      res.status(500).json(error.message);
    }







  }
}

module.exports = OrdersControllers;
