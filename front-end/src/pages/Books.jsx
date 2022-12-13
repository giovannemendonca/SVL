import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import FormEditBooks from '../components/Books/FormEditBook';
import NavBar from '../components/NavBar/NabBar'
import { useEffect } from 'react';
import api from '../api/Api';
import { useNavigate } from 'react-router-dom';



const Th = styled.th`
  background-color: rgba(58, 122, 179, 0.775);
  border-radius: 8px;
  color: #171777;
  `
const HeaderBook = styled.div`
  display: flex;
  padding: 8px;
  border-bottom: solid 1px #00000073;
  margin-bottom: 8px;

`
const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 16px;
    width: 100%;
    

`
const ContainerSearch = styled.div`
    display: flex;
    gap: 8px;
    height: 2.5rem;
    width: 75%;

`



function Books() {


  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const [books, setBooks] = useState([])
  const [bookEdit, setBookEdit] = useState(null)
  const [idBook, setIdBook] = useState("");
  const [filter, setFilter] = useState(true)

  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem('token');
    getBooks(token);

  }, [])
  useEffect(() => {
    const token = localStorage.getItem('token')
    getBooks(token)
    setBookEdit(null)
    setFilter(true)

  }, [show, filter])



  async function getBooks(token) {
    await api.get("/books", {
      headers: {
        "x-acess-token": token
      }
    }).then(response => setBooks(response.data))
      .catch((error) => {
        if (error?.response?.statusText === 'Unauthorized') {
          alert('Sessão expirada \nEfetue o login Novamente')
          navigate('/')
        }
      })
  }

  async function getBookID() {

    const token = localStorage.getItem('token')

    await api.get(`/book/${idBook}`, {
      headers: {
        "x-acess-token": token
      }

    }).then(response => {
      setBooks([response.data])

    }).catch((error) => console.log(error))

  }

  function cleanFilter() {
    setFilter(false)
    setIdBook("")

  }

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }




  return (
    <>
      <NavBar />
      <HeaderBook>
        <h2>Livros</h2>

        <ContainerButton>

          <ContainerSearch>

            <Form.Select onChange={(e) => setIdBook(e.target.value)} size="lg" style={{ width: '600px' }} >
              {books.map(book => (
                <option key={book.id} value={book.id}>{book.titulo}</option>
              ))}
            </Form.Select >

            <Button
              className="outline-primary linkModal"
              onClick={getBookID}
            >
              Consultar livro
            </Button>
            <Button
              style={{ margin: '0 8px' }}
              className="outline-primary linkModal"
              onClick={cleanFilter}
            >
              Limpar filtro
            </Button>
          </ContainerSearch>

          <Link className='link' to={"/app/registerBook"}>Cadastrar livro</Link>

        </ContainerButton>
      </HeaderBook>

      <Table responsive >
        <thead>
          <tr>
            <Th>Titulo</Th>
            <Th>Autor</Th>
            <Th>Editora</Th>
            <Th>Data Publicação</Th>
            <Th>ISBN-13</Th>
            <Th>Numero de paginas</Th>
            <Th>Valor</Th>
            <Th>Quantidade</Th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => <tr key={book.id}>
            <td>{book && book.titulo}</td>
            <td>{book && book.autor}</td>
            <td>{book && book.editora}</td>
            <td>{book && book.dataPublicacao}</td>
            <td>3265981245125</td>
            <td>{book && book.numeroPaginas}</td>
            <td>{book && book.valor}</td>
            <td>{book && book.quantidade}</td>
            <td>
              <Button
                variant='outline-info'
                size='sm'
                onClick={() => {
                  setBookEdit(book)
                  handleShow(true)
                }

                }>
                editar
              </Button>
            </td>
          </tr>)}

        </tbody>
      </Table>

      {show && <FormEditBooks show={show} setShow={setShow} fullscreen={fullscreen} data={bookEdit} />}

    </>
  );
}

export default Books;