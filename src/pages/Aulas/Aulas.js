import React from 'react'
import Modal from '../../Components/modal'
import { useState } from 'react';

export default function Aulas() {
    const [open, setOpen] = useState(false);
    const { Aula, AulaSelecionada } = useState();

    return (
        <>
            <button onClick={() => {
                setOpen(true);
            }}>Abrir Modal</button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <h1>Eita oia a aula</h1>
            </Modal>
        </>
    )
}
