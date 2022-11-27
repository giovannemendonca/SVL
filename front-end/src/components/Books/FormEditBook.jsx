import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
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


function FormEditBooks({ show, fullscreen, setShow }) {
    return (

        <>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>

                <Modal.Header closeButton>
                    <Modal.Title>Editar Livro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Form noValidate  >


                            <Row className="mb-4">


                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="id"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="titulo"
                                    />
                                </Form.Group>

                            </Row>

                            <Row className="mb-4">

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Autor</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="autor"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Editora</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="editora"
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-4">

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Numero de paginas</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="numero de paginas"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>ISBN-13</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="isbn-13"
                                    />
                                </Form.Group>

                            </Row>

                            <Row className="mb-4">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Quantidade em estoque</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="quantidade"
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

                            <ContainerButtom>
                                <Button onClick={() => setShow(false)} >Salvar alterações</Button>
                            </ContainerButtom>

                        </Form>

                    </Container>

                </Modal.Body>
            </Modal>
        </>

    )
}

export default FormEditBooks