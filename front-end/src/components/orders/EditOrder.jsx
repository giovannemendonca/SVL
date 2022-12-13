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


const ContainerButtom = styled.div`
display: flex;
gap: 20px;
`


function FormEditOrder({ show, fullscreen, setShow, data }) {

    const { register, handleSubmit } = useForm()

    const handleSubmitBook = (e) => {
        updateBook(e)
    }
/* 
    const updateBook = async (data) => {
        const token = localStorage.getItem('token')
        await api.put('/books', data, { headers: { "x-acess-token": token } })
            .then(response => alert(response?.data?.message))
            .catch((error) => console.log(error.message))
        setShow(false)
    } */

    return (

        <>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>

                <Modal.Header closeButton>
                    <Modal.Title>Editar Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Form onSubmit={handleSubmit(handleSubmitBook)}  >


                            <Row className="mb-4">


                                <Form.Group as={Col} md="6" controlId="validationCustom01">
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
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Cliente</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="titulo"
                                        readOnly
                                        defaultValue={data ? data.nomeCliente : null}
                                        {...register('nomeCliente')}
                                    />
                                </Form.Group>

                            </Row>

                            <Row className="mb-4">

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Livro</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="autor"
                                        readOnly
                                        defaultValue={data ? data.tituloLivro : null}
                                        {...register('tituloLivro')}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Quantidade</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="editora"
                                        readOnly
                                        defaultValue={data ? data.quantidade : null}
                                        {...register('quantidade')}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-4">

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Valor</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="numero de paginas"
                                        readOnly
                                        defaultValue={data ? data.valor : null}
                                        {...register('valor')}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Valor Final</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="valorTotal"
                                        readOnly
                                        defaultValue={data ? data.valorTotal : null}
                                        {...register('valorTotal')}
                                    />
                                </Form.Group>

                            </Row>

                            <Row className="mb-4">

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Data da venda</Form.Label>
                                    <Form.Control
                                        required
                                        type="datetime"
                                        readOnly
                                        defaultValue={data ? data.createdAt : null}
                                        {...register('createdAt')}
                                    />
                                </Form.Group>
                            </Row>

                            <ContainerButtom>
                                <Button  >Voltar</Button>
                            </ContainerButtom>
                            
                            {console.log(data)}

                        </Form>

                    </Container>

                </Modal.Body>
            </Modal>
        </>

    )
}

export default FormEditOrder