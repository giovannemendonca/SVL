import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import NavBar from '../NavBar/NabBar';



const ContainerButtom = styled.div`

display: flex;
gap: 20px;
`


const ContainerRegisterBook = styled.section`
 margin-top: 32px;
`

function RegisterBook() {


    return (

        <>
            <NavBar />
            <ContainerRegisterBook>
                <Container>

                    <Form noValidate  >
                        <Row className="mb-4">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="titulo"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="autor"
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
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Data de publicação</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="data de publicação"
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
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Numero de paginas</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="numero de paginas"
                                />
                            </Form.Group>

                        </Row>

                        <Row className="mb-4">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Numero  </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="numero"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="quantidade"
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