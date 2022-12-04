import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import api from '../../api/Api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const ContainerButtom = styled.div`
display: flex;
gap: 20px;
`



function FormEdit({ show, fullscreen, setShow, data }) {

    const { register, handleSubmit } = useForm()


    const updateClients = async (data) => {
        const token = localStorage.getItem('token')
        await api.put('/clients', data, { headers: { "x-acess-token": token } })
            .then(response => alert(response?.data?.message))
            .catch((error) => console.log(error.message))
        setShow(false)
    }



    const handleSubmitClient = (e) => {
        updateClients(e)
    }

    return (


        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>

                    <Form onSubmit={handleSubmit(handleSubmitClient)}  >


                        <Row className="mb-4">
                            <Form.Group as={Col} md="2" controlId="validationCustom01">
                                <Form.Label>ID</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="id"
                                    defaultValue={data ? data.id : null}
                                    readOnly
                                    {...register('id')}
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
                                    defaultValue={data ? data.nome : null}
                                    {...register('nome')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Cpf</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="cpf"
                                    defaultValue={data ? data.cpf : null}
                                    readOnly
                                    {...register('cpf')}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-4">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="telefone"
                                    defaultValue={data ? data.telefone : null}
                                    {...register('telefone')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Data de nascimento</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="data de nascimento"
                                    defaultValue={data ? data.dataNascimento : null}
                                    {...register('dataNascimento')}
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
                                    defaultValue={data ? data.cep : null}
                                    {...register('cep')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="endereço"
                                    defaultValue={data ? data.endereco : null}
                                    {...register('endereco')}
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
                                    defaultValue={data ? data.numero : null}
                                    {...register('numero')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="complemento"
                                    defaultValue={data ? data.complemento : null}
                                    {...register('complemento')}
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
                                    defaultValue={data ? data.cidade: null}
                                    {...register('cidade')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="estado"
                                    defaultValue={data ? data.estado : null}
                                    {...register('estado')}
                                />
                            </Form.Group>
                        </Row>

                        <ContainerButtom>
                            <Button type='submit'  >Salvar alterações</Button>
                        </ContainerButtom>

                    </Form>

                </Container>

            </Modal.Body>
        </Modal>

    )
}

export default FormEdit