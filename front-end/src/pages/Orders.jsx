import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar/NabBar'
import api from '../api/Api';
import FormEditOrder from '../components/orders/EditOrder';


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

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const [orders, setOrders] = useState([])
    const [orderEdit, setOrderEdit] = useState(null)
    const [cpf, setCpf] = useState("")
    const [filter, setFilter] = useState(true)


    useEffect(() => {
        allOrders();
    }, [])


    useEffect(() => {
        const token = localStorage.getItem('token');
        allOrders(token)
        setOrderEdit(null)
        setFilter(true)
    
      }, [show, filter])
    

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    const allOrders = async () => {

        const token = localStorage.getItem('token')

        await api.get('/app/orders', {
            headers: {
                "x-acess-token": token
            }
        }).then(response => setOrders(response.data))
            .catch(error => console.log(error))
    }


    async function getOrderToClient() {

        const token = localStorage.getItem('token')
        try {
            await api.get(`/app/order/${cpf}`, {
                headers: {
                    "x-acess-token": token
                }

            }).then(response => {
                setOrders(response.data)

            })
                .catch((error) => console.log(error))
        } catch (error) {

        }
    }


  function cleanFilter() {
    setFilter(false)
    setCpf("")
  }


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
                                placeholder="Digite o cpf do cliente"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />


                        </Form.Group>

                        <Button className="outline-primary linkModal" onClick={getOrderToClient}>
                            Consultar pedido
                        </Button>

                        <Button style={{ margin: '0 8px' }} className="outline-primary linkModal" onClick={cleanFilter}  >
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
                        <Th>Cpf</Th>
                        <Th>Item</Th>
                        <Th>Quantidade</Th>
                        <Th>valor</Th>
                        <Th>Valor Final</Th>
                        <Th></Th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => <tr key={index}>
                        <td>{order.id}</td>
                        <td>{order.nomeCliente}</td>
                        <td>{order.cpf}</td>
                        <td>{order.tituloLivro}</td>
                        <td>{order.quantidade}</td>
                        <td>R$ {order.valor}</td>
                        <td>R$ {order.valorTotal}</td>
                        <td>
                            <Button
                                variant='outline-info'
                                size='sm'
                                onClick={() => {
                                    setOrderEdit(order)
                                    handleShow(true)
                                }}>
                                Visualizar
                            </Button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
            {show && <FormEditOrder show={show} setShow={setShow} fullscreen={fullscreen} data={orderEdit} />}
        </>
    );
}


export default Ordens