import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar/NabBar'
import api from '../api/Api';


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


function Ordens() {


    const [orders, setOrders] = useState([])


    return (
        <>
            <NavBar />
            <HeaderClients>
                <h2>Pedidos</h2>

                <ContainerButton>

                    <ContainerSearch>

                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="numero do pedido"
                            />


                        </Form.Group>

                        <Button className="outline-primary linkModal">
                            Consultar pedido
                        </Button>

                        <Button style={{ margin: '0 8px' }} className="outline-primary linkModal" >
                            Limpar filtro
                        </Button>

                    </ContainerSearch>

                    <Link className='link' to={"/app/registerOrders"}>Cadastrar pedido</Link>

                </ContainerButton>


            </HeaderClients>

            <Table responsive>
                <thead>
                    <tr>
                        <Th>Pedido ID</Th>
                        <Th>Cliente</Th>
                        <Th>Telefone</Th>
                        <Th>Item</Th>
                        <Th>Quantidade</Th>
                        <Th>valor</Th>
                        <Th>Valor Final</Th>
                    </tr>
                </thead>
                <tbody>


                </tbody>
            </Table>

        </>
    );
}


export default Ordens