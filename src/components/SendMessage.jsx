import React from 'react';
import close from '../images/close.svg'

function SendMessage({ModalActive,setModalActive, children }) {



    return (
        <div className={ModalActive ? 'message__container ' : 'message__container hidden'} >
            <div className={ModalActive ? 'message ' : 'message hidden'}>
                {children}
            </div>
        </div >
    );
}

export default SendMessage;