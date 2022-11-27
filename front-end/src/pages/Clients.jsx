import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormEdit from '../components/clients/FormEditClients';
import NavBar from '../components/NavBar/NabBar'
const Th = styled.th`
  background-color: rgba(58, 122, 179, 0.775);
  border-radius: 8px;
  color: #171777;
`
const HeaderClients = styled.div`
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





function tableCliente() {

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


  return (

    <>
      <NavBar/>
      <HeaderClients>
        <h2>CLientes</h2>

        <ContainerButton>

          <ContainerSearch>

            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Digite o Cpf"
              />
            </Form.Group>

            <Button className="outline-primary linkModal">Consultar Cliente </Button>

          </ContainerSearch>

         <Link className='link' to={"/app/registerClient"}>Cadastrar cliente</Link>
        </ContainerButton>


      </HeaderClients>

      <Table responsive>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>Telefone</Th>
            <Th>CPF</Th>
            <Th>Data de nascimento</Th>
            <Th>Endereço</Th>
            <Th>Numero</Th>
            <Th>Complemento</Th>
            <Th colSpan={2}>Cidade</Th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>Giovanne Mendonça</td>
            <td>(85)986482308</td>
            <td>06798162320</td>
            <td>24/12/1995</td>
            <td>Rua Mosenhor Bruno</td>
            <td>1317</td>
            <td>apt 102</td>
            <td>Fortaleza - CE</td>
            <th><Button variant="outline-info" size='sm'  onClick={() => handleShow(true)}>editar</Button></th>
          </tr>
        </tbody>
      </Table>

      <FormEdit show={show} setShow={setShow} fullscreen={fullscreen} />
    </>
  );
}

export default tableCliente;