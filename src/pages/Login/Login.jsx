import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './style'

export default function Login() {
    const [data, setData] = useState();
    const [form, setform] = useState()
    const history = useHistory()
    // wait until back end is done

    async function submitHandler(event) {
        event.preventDefault()
        // don't do this
        if (form.user === 'admin' && form.pass === 'admin') {
            history.push('/Aulas')
        }
    }

    function myChangeHandler(event) {
        setform({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <S.Container>
            <h3>Log admin &  pass: admin</h3>
            <h1>Bem Vindo De volta</h1>

            <S.Form onSubmit={submitHandler}>
                <label htmlFor="user">Usuario</label>
                <S.Input type="text" onChange={myChangeHandler} placeholder='usuario' name='user' />
                <label htmlFor="password">Senha</label>
                <S.Input type="password" onChange={myChangeHandler} name="pass" placeholder='Senha' />
                <S.Submit type="submit" value="Logar" />

                <span>Não possui uma conta? <S.Registrar href='/Register'>Registre-se</S.Registrar> </span>
            </S.Form>
        </S.Container>
    )
}
