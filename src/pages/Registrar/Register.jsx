import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './style'

export default function Register() {
    const [form, setform] = useState()

    const history = useHistory()

    // run back end
    async function submitHandler(event) {
        event.preventDefault()
        // do this
        await fetch('http://localhost:3333/user/', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                user: `${form.user}`,
                pass: `${form.pass}`,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => json.erro = true ? alert(json.message) : () => {
                alert(json.message)
            }
            )

    }

    function myChangeHandler(event) {
        setform({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <S.Container>
            <h1>Bem Vindo</h1>
            <S.Form onSubmit={submitHandler}>
                <label htmlFor="user">Usuario</label>
                <S.Input type="text" onChange={myChangeHandler} placeholder='usuario' name='user' />
                <label htmlFor="password">Senha</label>
                <S.Input type="password" onChange={myChangeHandler} name="pass" placeholder='Senha' />
                <S.Submit type="submit" value="cadastrar" />

                <span>Ja tem uma conta? <S.Registrar href='/'>Login</S.Registrar> </span>
            </S.Form>
        </S.Container>
    )
}
