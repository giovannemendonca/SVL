import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import { useForm } from 'react-hook-form'
import NavBar from '../NavBar/NabBar';


const ContainerButtom = styled.div`
display: flex;
gap: 20px;
`
const ContainerRegisterClient = styled.section`
 margin-top: 32px;
`



function RegisterClient() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [nome, setNome] = useState('')

    const data = (event) => {
        console.log(event)

    }


    return (

        <>
            <NavBar />
            <ContainerRegisterClient>
                <Container>

                    <Form noValidate onSubmit={handleSubmit(data)} >
                        <Row className="mb-4">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="nome"
                                    {...register('nome')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="telefone"
                                    {...register('telefone')}
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
                                    {...register('cpf')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Data de nascimento</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="data de nascimento"
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
                                    {...register('cep')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="endereço"
                                    {...register('endereço')}
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
                                    {...register('numero')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="complemento"
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
                                    {...register('cidade')}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="estado"
                                    {...register('estado')}
                                />
                            </Form.Group>
                        </Row>

                        <ContainerButtom>
                            <Button type="submit">Cadastrar Cliente</Button>
                            <Button type='reset'>Limpar</Button>
                        </ContainerButtom>

                    </Form>

                </Container>
            </ContainerRegisterClient>
        </>

    );
}

export default RegisterClient;