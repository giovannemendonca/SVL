import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import FormEditBooks from '../components/Books/FormEditBook';

const Th = styled.th`
  background-color: rgba(58, 122, 179, 0.775);
  border-radius: 8px;
  color: #171777;
  `
const HeaderBook = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  border-bottom: solid 1px #00000073;
  margin-bottom: 8px;

`
const ContainerButton = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 16px;
    width: 80%;
    

`
const ContainerSearch = styled.div`
    display: flex;
    width: 70%;

`



function Books() {


  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


  return (
    <>

      <HeaderBook>
        <h2>Livros</h2>

        <ContainerButton>
          <ContainerSearch>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Digite o nome do livro"
              />
            </Form.Group>
            <Button className="outline-primary linkModal">Consultar livro </Button>

          </ContainerSearch>

          <Link className='link' to={"/registerClient"}>Cadastrar livro</Link>

        </ContainerButton>
      </HeaderBook>

      <Table responsive>
        <thead>
          <tr>
            <Th>Titulo</Th>
            <Th>Autor</Th>
            <Th>Editora</Th>
            <Th>Numero de paginas</Th>
            <Th>ISBN-13</Th>
            <Th>Quantidade</Th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Os filhos de Húrin</td>
            <td>J. R. R. Tolkien</td>
            <td>HarperCollins</td>
            <td>290</td>
            <td>142012121212</td>
            <td>42</td>
            <td><Button variant='outline-info' size='sm' onClick={() => handleShow(true)}>editar</Button></td>
          </tr>
        </tbody>
      </Table>

      <FormEditBooks show={show} setShow={setShow} fullscreen={fullscreen} />

    </>
  );
}

export default Books;