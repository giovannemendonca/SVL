import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../UserContext';


const ContainerLogin = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
`

export default function TelaLogin() {


    const { userLogin } = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    async function handleSubmit(event) {
        event.preventDefault();

        userLogin(username, password)
        setUsername('')
        setPassword('')
    }


    return (

        < ContainerLogin>

            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <div className="form-floating mb-1">
                    <input
                        type="usuario"
                        className="form-control form-control-lg"
                        id="usuario"
                        placeholder="usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="usuario">Usuário</label>


                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="senha"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="senha">Senha</label>
                </div>

                <div className="checkbox mb-3">
                </div>
                <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">Entrar</button>

                <div className='form-floating d-flex justify-content-between'>
                    <a href="#">Recuperar sua senha?</a>
                    <a href="#">Criar Usuário</a>
                </div>

                <p className="mt-5 mb-3 text-muted">&copy;Giovanne Mendonça  2022–2022</p>
            </form>
        </ContainerLogin>


    )
}