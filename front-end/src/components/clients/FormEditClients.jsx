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


function FormEdit({ show, fullscreen, setShow }) {
    return (

        <>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Form noValidate  >
                            <Row className="mb-4">
                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="id"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="nome"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="telefone"
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-4">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="cpf"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Data de nascimento</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="data de nascimento"
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-4">

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Cep</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="cep"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Endereço</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="endereço"
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
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="complemento"
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-4">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Cidade  </Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="cidade"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="estado"
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

export default FormEdit