import React from 'react';
import close from '../images/close.svg'

function SendMessage(props) {
    return (
        <div className='message'>
            <button className="message__close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1047 10.0008L19.7709 1.33447C20.0761 1.02935 20.0761 0.534663 19.7709 0.229585C19.4658 -0.0754924 18.9711 -0.0755315 18.6661 0.229585L9.99975 8.8959L1.33347 0.229585C1.02836 -0.0755315 0.533671 -0.0755315 0.228593 0.229585C-0.0764842 0.534702 -0.0765233 1.02939 0.228593 1.33447L8.89487 10.0007L0.228593 18.667C-0.0765233 18.9722 -0.0765233 19.4669 0.228593 19.7719C0.381132 19.9245 0.581093 20.0007 0.781053 20.0007C0.981014 20.0007 1.18094 19.9245 1.33351 19.7719L9.99975 11.1057L18.666 19.7719C18.8186 19.9245 19.0185 20.0007 19.2185 20.0007C19.4184 20.0007 19.6184 19.9245 19.7709 19.7719C20.0761 19.4668 20.0761 18.9721 19.7709 18.667L11.1047 10.0008Z" fill="white" />
                </svg>
            </button>
            <div className="profile__inputContainer">
                <input type="text" className="profile__input" placeholder='Ф.И.О.' value={"Дмитрий Валак"} />
                <input type="text" className="profile__input" placeholder='e-mail' value={"alex.provo@mail.com"} />
                <textarea type="text" className="profile__input" placeholder='Текст сообщения' />
                <button className='BTNSend'>Отправить</button>
            </div>
            <div className="message__contacts">
                <span className='message__sub'>e-mail: </span>
                <a href="mailto:info@mywebsite.ru" className="message__e-mail">info@mywebsite.ru</a>
                <span className='message__sub'>тел: </span>
                <a href="tel:+943-232-856-22" className="message__phone">+943-232-856-22</a>
            </div>
        </div>
    );
}

export default SendMessage;