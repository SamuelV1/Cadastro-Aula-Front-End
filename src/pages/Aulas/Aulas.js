// react imports
import React from 'react'
import { useState } from 'react';
import Form from '../../Components/Form';
// components import
import Modal from '../../Components/modal'
// Styles
import * as S from './style'

// lib pra transformar o conteudo em markdown 
import 'highlight.js/styles/github.css'
import marked from 'marked'
// isso e config do highlight.js no caso pra fazer o markdown
import('highlight.js').then(hljs => {
    const h = hljs.default

    marked.setOptions({
        highlight: (code, language) => {
            if (language && h.getLanguage(language)) {
                return h.highlight(code, { language }).value
            }

            return h.highlightAuto(code).value
        },
    })
})

export default function Aulas() {
    const [open, setOpen] = useState(false);
    const [Aula, addAulas] = useState([]);

    const [Aulaativa, ativar] = useState();

    function onRemoveFile(index, event) {
        event.stopPropagation();
        let array = [...Aula]
        array.splice(index, 1)
        addAulas(array)
    }
    function Activate(value) {
        ativar(Aula[value])
        setOpen(true);
    }
    return (
        <>
            <S.Header>
                <Form addAulas={addAulas}>
                </Form>
            </S.Header>
            <S.Container>
                {Aula.length >= 1 ? Aula.map((aula, idx) => (
                    <S.AulaContainer onClick={(e) => (Activate(e.currentTarget.dataset.user))} key={idx} data-user={idx}>
                        <h4>{aula.Titulo}</h4>
                        <p>{aula.description}</p>
                        <S.DeleteButton onClick={(event) => (onRemoveFile(idx, event))}>
                            <S.RemoveIcon />
                        </S.DeleteButton>
                    </S.AulaContainer>
                )) : <p>&#1F615</p>}
            </S.Container>
            <Modal open={open} onClose={() => setOpen(false)} >
                {Aulaativa ? <div><h1>{Aulaativa.Titulo}</h1> <article dangerouslySetInnerHTML={{ __html: marked(Aulaativa.Conteudo) }}></article></div> : <h1>Erro</h1>}
            </Modal>
        </>
    )
}
