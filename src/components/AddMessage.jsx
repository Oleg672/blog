import React from 'react';
import SendImg from '../images/send.svg';
import Pictureimg from '../images/sendImg.svg';

function AddMessage(props) {
    return (
        <div className='addMessage'>
            <textarea id='textarea' className="addMessage__input" placeholder='Напишите что-нибудь'></textarea>

            <div className="addMessage__buttons">
                <button className="addMessage__img"><img src={Pictureimg} alt="" className='addMessage__send-img' /></button>
                <button className="addMessage__send"><img src={SendImg} alt="" className='addMessage__send-img' /></button>
            </div>


        </div>

    );
}


export default AddMessage;