import React, { useContext } from "react";
import sidebar__Img from "../images/sidebar.png"
import sidebar__foto from "../images/foto.png"
import Menu from "./Menu";
import Media from 'react-media';
import { SidebarContext } from '../providers/SidebarProvider';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import SendMessage from "./SendMessage";
import { useState } from "react";

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
                    <button onClick={() => { setModal(false) }} className="message__close">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1047 10.0008L19.7709 1.33447C20.0761 1.02935 20.0761 0.534663 19.7709 0.229585C19.4658 -0.0754924 18.9711 -0.0755315 18.6661 0.229585L9.99975 8.8959L1.33347 0.229585C1.02836 -0.0755315 0.533671 -0.0755315 0.228593 0.229585C-0.0764842 0.534702 -0.0765233 1.02939 0.228593 1.33447L8.89487 10.0007L0.228593 18.667C-0.0765233 18.9722 -0.0765233 19.4669 0.228593 19.7719C0.381132 19.9245 0.581093 20.0007 0.781053 20.0007C0.981014 20.0007 1.18094 19.9245 1.33351 19.7719L9.99975 11.1057L18.666 19.7719C18.8186 19.9245 19.0185 20.0007 19.2185 20.0007C19.4184 20.0007 19.6184 19.9245 19.7709 19.7719C20.0761 19.4668 20.0761 18.9721 19.7709 18.667L11.1047 10.0008Z" fill="white" />
                        </svg>
                    </button>
                    <div className="profile__inputContainer">
                        <input type="text" className="profile__input" placeholder='Ф.И.О.' />
                        <input type="text" className="profile__input" placeholder='Ваш e-mail' />
                        <textarea type="text" className="profile__input" placeholder='Текст сообщения' />
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