import React from 'react';
import styled from 'styled-components';



const ContainerLogin = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(155, 181, 195, 0.542);
`





export default function TelaLogin() {

    return (

        < ContainerLogin>

            <form>
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <div className="form-floating mb-1">
                    <input type="usuario" className="form-control form-control-lg" id="usuario" placeholder="usuario" />
                    <label htmlFor="usuario">Usuário</label>


                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="senha" placeholder="Password"  />
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