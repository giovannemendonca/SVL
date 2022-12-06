import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import api from '../../api/Api';
import NavBar from '../NavBar/NabBar';


const ContainerButtom = styled.div`

display: flex;
gap: 20px;
`

const ContainerRegisterBook = styled.section`
 margin-top: 32px;
`

function RegisterBook() {


    const { register, handleSubmit } = useForm();

    const handelSubmitBooks = (e) => createBooks(e)

    const createBooks = async (data) => {
        try {
            const token = localStorage.getItem('token')
            await api.post('/books', data, { headers: { "x-acess-token": token } })
                .then(response => console.log(response))

        } catch (error) {
            console.log(error)
        }
        finally {
           /*  navigate('/app/books') */
        }

    }


    return (

        <>
            <NavBar />
            <ContainerRegisterBook>
                <Container>

                    <Form onSubmit={handleSubmit(handelSubmitBooks)} >
                        <Row className="mb-4">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="titulo"
                                    {...register('titulo')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="autor"
                                    {...register('autor')}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-4">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Editora</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="editora"
                                    {...register('editora')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Data de publicação</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="data de publicação"
                                    {...register('dataPublicacao')}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-4">

                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>ISBN13</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="ISBN13"
                                    {...register('ISBN13')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Numero de paginas</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="numero de paginas"
                                    {...register('numeroPaginas')}
                                />
                            </Form.Group>

                        </Row>

                        <Row className="mb-4">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Valor</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    step={"any"}
                                    placeholder="R$"
                                    {...register('valor')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="quantidade"
                                    {...register('quantidade')}
                                />
                            </Form.Group>
                        </Row>

                        <ContainerButtom>
                            <Button type="submit">Cadastrar livro</Button>
                            <Button type='reset'>Limpar</Button>
                        </ContainerButtom>



                    </Form>

                </Container>
            </ContainerRegisterBook>

        </>
    );
}

export default RegisterBook;