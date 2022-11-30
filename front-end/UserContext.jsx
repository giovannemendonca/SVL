import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import api from './src/api/Api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userID, setUserId] = useState(null);
    const navigate = useNavigate();



    async function getUser(token, id) {

        try {
            const response = await api.post('/login/users', { id: id }, {
                headers: {
                    "x-acess-token": token
                }
            }).then((response) => {
                const json = response.data;
                setUser(json.username)
                setUserId(json.id)
                console.log('deu certo')
                navigate('app')
            }).catch((err) => {
                console.log(err.message.response)

            })

        } catch (error) {
            console.log(error.message.response.data)
        }

    }


    async function userLogin(user, password) {
        try {
            const response = await api.post('/login', { user, password })
            const token = response.data.token;
            const id = response.data.id;
            localStorage.setItem('token', token);
            localStorage.setItem('id', id)
            getUser(token, id)

        } catch (error) {
            alert('Usuário ou senha Inválida')
        }
    }

    async function logout() {
        setUser(null);
        setUserId(null)
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        navigate('/')
    }


    useEffect(() => {

        async function autoLogin() {
            const id = localStorage.getItem('id')
            const token = localStorage.getItem('token')

            if (token && id) {
                return await getUser(token, id)
            }

        }
        autoLogin();
    }, [])



    return (
        <UserContext.Provider value={{ userLogin, user, userID, logout }}  >
            {children}
        </UserContext.Provider>
    );
};
