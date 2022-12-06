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


function FormEditBooks({ show, fullscreen, setShow, data }) {

    const { register, handleSubmit } = useForm()

    const handleSubmitBook = (e) => {
        updateBook(e)
    }

    const updateBook = async (data) => {
        const token = localStorage.getItem('token')
        await api.put('/books', data, { headers: { "x-acess-token": token } })
            .then(response => alert(response?.data?.message))
            .catch((error) => console.log(error.message))
        setShow(false)
    }

    return (

        <>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>

                <Modal.Header closeButton>
                    <Modal.Title>Editar Livro</Modal.Title>
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
                                        {...register('id')}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="titulo"
                                        defaultValue={data ? data.titulo : null}
                                        {...register('titulo')}
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
                                        defaultValue={data ? data.autor : null}
                                        {...register('autor')}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Editora</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="editora"
                                        defaultValue={data ? data.editora : null}
                                        {...register('editora')}
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
                                        defaultValue={data ? data.numeroPaginas : null}
                                        {...register('numeroPaginas')}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>ISBN-13</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="isbn-13"
                                        defaultValue={'123456789411'}
                                        {...register('isbn13')}
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
                                        defaultValue={data ? data.quantidade : null}
                                        {...register('quantidade')}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Data de publicação</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="data de publicação"
                                        defaultValue={'1995-01-25'}
                                        {...register('dataPublicacao')}
                                    />
                                </Form.Group>
                            </Row>

                            <ContainerButtom>
                                <Button type='submit' >Salvar alterações</Button>
                            </ContainerButtom>

                        </Form>

                    </Container>

                </Modal.Body>
            </Modal>
        </>

    )
}

export default FormEditBooks