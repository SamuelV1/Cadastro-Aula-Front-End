import React, { useState } from 'react'
import * as S from './style'

export default function Register() {


    return (
        <S.Container>
            <h1>Bem Vindo</h1>

            <S.Form >
                <label htmlFor="user">Usuario</label>
                <S.Input type="text" placeholder='usuario' name='user' />
                <label htmlFor="password">Senha</label>
                <S.Input type="password" name="password" placeholder='Senha' />
                <S.Submit type="submit" value="Logar" />

                <span>Ja tem uma conta? <S.Registrar href='/Register'>Login</S.Registrar> </span>
            </S.Form>
        </S.Container>
    )
}
