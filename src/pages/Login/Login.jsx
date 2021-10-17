import React, { useState } from 'react'
import * as S from './style'

export default function Login() {
    return (
        <S.Container>
            <h1>Bem Vindo De volta</h1>

            <S.Form onSubmit=''>
                <label htmlFor="user">Usuario</label>
                <S.Input type="text" placeholder='usuario' name='user' />
                <label htmlFor="password">Senha</label>
                <S.Input type="password" name="password" placeholder='Senha' />
                <S.Submit type="submit" value="Logar" />

                <span>Não possui uma conta? <S.Registrar href='/Register'>Registre-se</S.Registrar> </span>
            </S.Form>
        </S.Container>
    )
}
