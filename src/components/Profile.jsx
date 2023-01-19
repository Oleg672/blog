import React from 'react';
import avatar from '../images/avatar.png'

function Profile() {
    return (
        <div className='profile'>
            <h4 className="profile__title">Профиль</h4>
            <div className="profile__content">
                <div className="profile__inputContainer">
                    <input type="text" className="profile__input" placeholder='Ф.И.О.' value={"Александр Провостин"}/>
                    <input type="text" className="profile__input" placeholder='e-mail' value={"alex.provo@mail.com"}/>
                    <input type="password" className="profile__input" placeholder='Новый пароль' />
                    <input type="password" className="profile__input" placeholder='Подтвердите пароль' />
                    <button className='BTNSend'>Сохранить</button>
                </div>
                <div className="profile__avatarContainer">
                    <img className="profile__avatar" src={avatar} alt="avatar"  />
                    <a className='profile__NewImg' href="#">выбрать аватар</a>
                </div>
            </div>
        </div>
    );
}

export default Profile;