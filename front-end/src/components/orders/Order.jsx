import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import api from '../../api/Api'
import { useNavigate } from 'react-router-dom';


const Order = ({ client, carrinho, setCarrinho, setClient }) => {

  const [orderFinal, setOrderFinal] = useState();
  const navigate = useNavigate();


  const submitOrder = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      await api.post('/app/order', orderFinal, { headers: { "x-acess-token": token } })
        .then(response =>{
          alert('Pedido Realizado com sucesso!')
          navigate('/app/orders')         
        })

    } catch (error) {
      alert(error.response.data)
    }
  }

  useEffect(() => {
    setOrderFinal({ ...client, ...carrinho })
  }, [client, carrinho])



  return (

    <Form onSubmit={submitOrder} >



      <h2>Cliente</h2>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            readOnly
            defaultValue={client && client.nome}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Cpf</Form.Label>
          <Form.Control
            required
            type="text"
            readOnly
            defaultValue={client && client.cpf}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            required
            type="text"
            readOnly
            defaultValue={client && client.telefone}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            readOnly
            required
            defaultValue={client && client.cidade}
          />

        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            type="text"
            readOnly
            required
            defaultValue={client && client.estado}
          />
        </Form.Group>

      </Row>

      <h2>Itens</h2>

      <Table responsive>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {carrinho && carrinho.map((item, index) => <tr key={index}>
            <td>{item.livro}</td>
            <td>{item.quantidade}</td>
            <td>{item.valorUnidade}</td>
            <td>{item.valorFinal}</td>
          </tr>
          )}

          <tr>
            <td style={{ marginTop: "16px", fontWeight: "600", fontSize: "24px" }} >Valor total</td>
            <td></td>
            <td></td>
            {carrinho && <td style={{ marginTop: "16px", fontWeight: "600", fontSize: "24px" }} >{carrinho[0]?.valorFinal}R$</td>}
          </tr>

        </tbody>
      </Table>



      <Button type="submit">Finalizar Pedido</Button>
      <Button
        style={{ marginLeft: "8px", backgroundColor: "#ff0000" }}
        onClick={() => {
          setCarrinho(null)
          setClient(null)
        }
        }>
        Limpar Carrinho
      </Button>
    </Form>

  );
}

export default Order