import React, { useState, useContext } from "react";
import sidebar__Img from "../images/sidebar.png"
import sidebar__foto from "../images/foto.png"
import { SidebarContext } from '../providers/SidebarProvider';
import SendMessage from "./SendMessage";
import Menu from "./Menu";
import Media from 'react-media';
import {NavLink} from "react-router-dom";

function Sidebar(props) {
    const { Opened, setOpened } = useContext(SidebarContext);
    const [Modal, setModal] = useState(false);
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={sidebar__Img} alt="" className="sidebar__topImg" />
            </div>
            <div className="sidebar__inner">
                <div className="sidebar__mobileWrapp">
                    <div className="sidebar__foto-wrapper">
                        <img src={sidebar__foto} alt="" className="sidebar__foto" />
                    </div>
                    <div className="sidebar__title-mobileWrapp">
                        <h1 className="sidebar__title">Дмитрий Валак</h1>
                        <h2 className="sidebar__subtitle">блог front-end разработчика</h2>
                    </div>
                </div>
                <div className="sidebar__social">
                    <a href="#" className="sidebar__social-inst"></a>
                    <a href="#" className="sidebar__social-vk"></a>
                    <a href="#" className="sidebar__social-pinterest"></a>
                </div>
                <Media query="(max-width: 425px)" render={() =>
                (
                    <Menu />
                )}
                />
                <p className="sidebar__description">
                    Front-end разработчик. Практик верстки сайтов.
                    Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.
                </p>
                <div className="sidebar__buttons">
                    <NavLink to="/works" className="sidebar__btn clr-red" onClick={() => {
                        setOpened(!Opened);
                        props.onClickMyWorks();
                    }
                    }>Мои работы</NavLink>

                    <button onClick={() => setModal(!Modal)} className="sidebar__btn">Написать мне</button>
                </div>
                <SendMessage ModalActive={Modal} setModalActive={setModal} >
                    <div className="profile__inputContainer">
                        <input type="text" className="profile__input" placeholder='Ф.И.О.' />
                        <input type="text" className="profile__input" placeholder='Ваш e-mail' />
                        <textarea type="text" className="profile__input textarea__input" placeholder='Текст сообщения' />
                        <div className="BTNSend__wrap">
                            <button className='BTNSend'>Отправить</button>
                        </div>
                    </div>
                    <div className="message__contacts">
                        <a href="mailto:info@mywebsite.ru" className="message__e-mail">info@mywebsite.ru</a>
                        <a href="tel:+943-232-856-22" className="message__phone">+943-232-856-22</a>
                    </div>
                </SendMessage>
            </div>
        </div >
    );
}

export default Sidebar;