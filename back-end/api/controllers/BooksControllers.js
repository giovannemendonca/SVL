const   db = require("../models");

class BooksControllers {
  //Cria um novo registro de livro
  static async createBooks(req, res) {
    try {
      const book = req.body;
      await db.Books.create(book);
      res.status(200).json({ message: `Livro Cadastrado com sucesso` });
    } catch (error) {
      console.log(error);
    }
  }

  // Pega todos os livros;
  static async getBooks(req, res) {
    try {
      const books = await db.Books.findAll();
      if (!books) return new Error("Nenhum livro localizado");
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  //Pega Livro por ID

  static async getBookToID(req, res){
    try {
      const {id} = req.params;
      console.log(id)

      const book = await db.Books.findOne({
        where: {
          id : id
        }
      });
      if(!book) return new Error('Nenhum livro encontrado')
      res.status(200).json(book) 

    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  // pega Livro pelo o Nome

  static async getBookToName(req, res){
    
    try {
      const {titulo} = req.params;

      const bookToTitle = await db.Books.findOne({
        where: {
          titulo: titulo
        }
      });
    
      if(!bookToTitle) return new Error('Nenhum livro encontrado')
      res.status(200).json(bookToTitle) 

    } catch (error) {
      res.status(500).json(error.message)
    }
  }


  // Atualizar Livro
  static async updateBooks(req, res) {
    try {
      const { id } = req.body;

      const data = req.body;

      await db.Books.update(data, { where: { id: id } });
      res.status(200).json({ message: "Alterações salvas com sucesso" });
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }
}

module.exports = BooksControllers;
