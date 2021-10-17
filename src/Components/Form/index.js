import React from 'react'
// default import
import { useState } from 'react';
// my modal import
import Modal from '../modal';
// my styled component import
import * as S from './style'
// my svgs 
import * as Icon from '../../ui/icons'

export default function Form({ addAulas, Aula }) {
    const [open, setOpen] = useState(false);
    const [form, setform] = useState()

    function myChangeHandler(event) {
        setform({ ...form, [event.target.name]: event.target.value });
    }
    function submitHandler(event) {
        event.preventDefault()
        addAulas(prevState => [...prevState, form])
    }

    return (
        <>
            <S.AddButton onClick={() => {
                setOpen(true);
            }}> <Icon.Plus></Icon.Plus> Adicionar Aula</S.AddButton>

            <Modal open={open} onClose={() => setOpen(false)}>
                <S.Form onSubmit={submitHandler}>
                    <label htmlFor="Titulo">Titulo Da aula</label>
                    <input type="text" required onChange={myChangeHandler} name='Titulo' placeholder='Titulo da Aula' />

                    <label htmlFor="Descrição">Descrição</label>
                    <input type="text" onChange={myChangeHandler} maxlength="20" name='description' placeholder='descrição da aula' />

                    <label htmlFor="Conteudo">Conteudo Da aula</label>
                    <textarea name="Conteudo" required onChange={myChangeHandler} cols="30" rows="10" placeholder='Use Markdown'></textarea>
                    <input type="submit" value="Adicionar Aula" />
                </S.Form>
            </Modal>
        </>
    )
}
