import React from 'react'

export default function Login() {
    return (
        <form action="#">
            <label htmlFor="user">Usuario</label>
            <input type="text" placeholder='usuario' name='user' />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" placeholder='Senha' />
        </form>
    )
}
