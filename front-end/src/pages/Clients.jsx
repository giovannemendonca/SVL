import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormEdit from '../components/clients/FormEditClients';
import NavBar from '../components/NavBar/NabBar'
import api from '../api/Api';
import { useNavigate } from 'react-router-dom';

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

  const [clients, setClients] = useState([])

  const [clientEdit, setClietEdit] = useState(null)
  const [cpf, setCpf] = useState("")
  const [filter, setFilter] = useState(true)

  const navigate = useNavigate()


  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function cleanFilter() {
    setFilter(false)
    setCpf("")
  }


  async function getClients(token) {
    await api.get("/clients", {
      headers: {
        "x-acess-token": token
      }
    }).then(response => setClients(response.data))
      .catch((error) => {
        if (error?.response?.statusText === 'Unauthorized') {
          alert('Sessão expirada \nEfetue o login Novamente')
          navigate('/')
        }
      })

  }

  async function getClientCPF() {

    const token = localStorage.getItem('token')
    try {
      await api.post('/clients/cpf', { cpf: cpf }, {
        headers: {
          "x-acess-token": token
        }

      }).then(response => {
        setClients([response.data])

      })
        .catch((error) => alert(error.response.data.message))
    } catch (error) { 

    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    getClients(token)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token');
    getClients(token)
    setClietEdit(null)
    setFilter(true)

  }, [show, filter])



  return (

    <>
      <NavBar />
      <HeaderClients>
        <h2>CLientes</h2>

        <ContainerButton>

          <ContainerSearch>

            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Digite o Cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />


            </Form.Group>

            <Button className="outline-primary linkModal" onClick={getClientCPF}>
              Consultar Cliente
            </Button>

            <Button style={{ margin: '0 8px' }} className="outline-primary linkModal" onClick={cleanFilter} >
              Limpar filtro
            </Button>

          </ContainerSearch>

          <Link className='link' to={"/app/registerClient"}>Cadastrar cliente</Link>

        </ContainerButton>


      </HeaderClients>

      <Table responsive>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th>Telefone</Th>
            <Th>Data de nascimento</Th>
            <Th>cep</Th>
            <Th>endereço</Th>
            <Th>Numero</Th>
            <Th>Complemento</Th>
            <Th>Cidade</Th>
            <Th colSpan={2}>Estado</Th>
          </tr>
        </thead>
        <tbody>

          {clients.map(client => <tr key={client.id}>
            <td>{client.nome}</td>
            <td>{client.cpf}</td>
            <td>{client.telefone}</td>
            <td>{client.dataNascimento}</td>
            <td>{client.cep}</td>
            <td>{client.endereco}</td>
            <td>{client.numero}</td>
            <td>{client.complemento}</td>
            <td>{client.cidade}</td>
            <td>{client.estado}</td>
            <th><Button variant="outline-info" size='sm' onClick={() => {
              setClietEdit(client)
              handleShow(true)
            }}>
              editar
            </Button></th>
          </tr>)}
        </tbody>
      </Table>

      {show ? <FormEdit show={show} setShow={setShow} fullscreen={fullscreen} data={clientEdit} /> : null}
    </>
  );
}

export default tableCliente;