import React from 'react'
import * as S from './style'

export default function Register() {
    return (
        <S.Container>
            <S.Registrar href='/Register'>Registrar</S.Registrar>
            <h1>Bem Vindo De volta</h1>
            <S.Form >
                <label htmlFor="user">Usuario</label>
                <S.Input type="text" placeholder='usuario' name='user' />
                <label htmlFor="password">Senha</label>
                <S.Input type="password" name="password" placeholder='Senha' />
                <S.Submit type="submit" value="Logar" />
            </S.Form>
        </S.Container>
    )
}
