import React, { useEffect } from 'react';

import Portal from './portal/Portal';
import { Overlay, Dialog } from './style.js';

const Modal = ({ children, open, onClose }) => {
    useEffect(() => {
        function onEsc(event) {
            if (event.keyCode === 27) onClose();
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.addEventListener('keydown', onEsc);
        };
    }, [onClose]);

    if (!open) return null;

    function onOverlayClick() {
        onClose();
    }

    function onDialogClick(event) {
        event.stopPropagation();
    }

    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}>{children}</Dialog>
            </Overlay>
        </Portal>
    );
};

export default Modal;