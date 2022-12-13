import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import NavBar from '../NavBar/NabBar';
import api from '../../api/Api';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import Order from './Order';
import { useForm } from 'react-hook-form';


const ContainerRegisterClient = styled.section`
 margin-top: 32px;
`
const InputSearch = styled.input`
    display: block;
    width: 20%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
const ContainerSearch = styled.form`
    display: flex;
    gap: 16px;
`
const InputTable = styled.input`
    border-radius: 7px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    width: 100px;
    border: none;
    background-color: #cccccc45;
    color: #555;


`
const TitleTable = styled.div`
    background-color: #435f7e;
    color: #fff;
    padding: 4px;
    font-size: 2rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    opacity: 0.9;
`


const RegisterOrdens = () => {

    const { register, handleSubmit, watch } = useForm()
    const qtd = watch('quantidade');
    const [cpf, setCpf] = useState(null)
    const [client, setClient] = useState(null)
    const [books, setBooks] = useState([])
    const [booktitle, setBooktitle] = useState([])
    const [booksSelected, setBooksSelected] = useState(null);
    const [carrinho, setCarrinho] = useState([]);




    useEffect(() => {
        const token = localStorage.getItem('token')
        getBooks(token)
    }, [])

    useEffect(() => {
        getBookTitle()
    }, [booktitle])


    async function getClientCPF(event) {
        event.preventDefault();

        const token = localStorage.getItem('token')
        try {
            await api.post('/clients/cpf', { cpf: cpf }, {
                headers: {
                    "x-acess-token": token
                }

            }).then(response => {
                setClient(response.data)

            })
                .catch((error) => alert(error.response.data.message))
        } catch (error) {

        }
    }


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

    async function getBookTitle() {

        const token = localStorage.getItem('token')
        await api.get(`/book/title/${booktitle}`, {
            headers: {
                "x-acess-token": token
            }

        }).then(response => {
            setBooksSelected(response.data)
        }).catch((error) => console.log(error))

    }

    const halderSubmitForm = (e) => {
        setCarrinho([...carrinho, e])
    }


    return (

        <>

            <NavBar />
            <ContainerRegisterClient>
                <Container>

                    {!client &&
                        <ContainerSearch onSubmit={(e) => getClientCPF(e)}>
                            <InputSearch placeholder='Digite o CPF do cliente' onChange={({ target }) => setCpf(target.value)} />
                            <Button type="submit" >
                                Buscar cliente
                            </Button>
                        </ContainerSearch>
                    }

                    {carrinho?.length === 0 ? <>

                        {client &&

                            <form onSubmit={handleSubmit(halderSubmitForm)} >
                                <h2>Selecione os Itens</h2>


                                <Table hover size='sm' responsive style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>id</th>
                                            <th>Quantidade</th>
                                            <th>Valor unidade</th>
                                            <th>Valor total</th>
                                            <th>editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <Form.Select{...register('livro')} size='sm' style={{ width: "300px" }} onBlur={(e) => setBooktitle(e.target.value)}>
                                                    <option disabled >Selecione os livros</option>
                                                    {books.map(item => <option key={item.id} value={item.titulo}>{item.titulo}</option>)}
                                                </Form.Select>
                                            </th>
                                            <th>
                                                <InputTable
                                                    type="text"
                                                    readOnly
                                                    defaultValue={booksSelected && booksSelected.id}
                                                    {...register('id')}
                                                />
                                            </th>
                                            <th>
                                                <InputTable
                                                    type="text"
                                                    {...register('quantidade')}
                                                    defaultValue={0}

                                                />
                                            </th>

                                            <th>
                                                <InputTable
                                                    type="text"
                                                    readOnly
                                                    required
                                                    defaultValue={booksSelected && booksSelected.valor}
                                                    {...register('valorUnidade')}
                                                />
                                            </th>
                                            <th>
                                                <InputTable
                                                    type="text"
                                                    readOnly
                                                    required
                                                    {...register('valorFinal')}
                                                    defaultValue={booksSelected && booksSelected.valor * qtd}

                                                />
                                            </th>
                                            <th>
                                                <Button size='sm' type="submit" >
                                                    Adicionar item
                                                </Button>
                                            </th>

                                        </tr>
                                    </tbody>

                                </Table>

                            </form>
                        }
                    </> : null}


                    <TitleTable>Pedido</TitleTable>
                    <Order
                        client={client}
                        carrinho={carrinho}
                        setCarrinho={setCarrinho}
                        setClient={setClient}
                    />


                </Container>

            </ContainerRegisterClient>
        </>
    )
}

export default RegisterOrdens