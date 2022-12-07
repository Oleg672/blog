import React from "react";
import sidebar__Img from "../images/sidebar.png"
import sidebar__foto from "../images/foto.png"
function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={sidebar__Img} alt="" className="sidebar__topImg" />
                <div className="sidebar__foto-wrapper">
                    <img src={sidebar__foto} alt="" className="sidebar__foto" />
                </div>
            </div>
            <div className="sidebar__inner">
                <h1 className="sidebar__title">Дмитрий Валак</h1>
                <h2 className="sidebar__subtitle">блог front-end разработчика</h2>
                <div className="sidebar__social">

                    <a href="#" className="sidebar__social-inst"></a>
                    <a href="#" className="sidebar__social-vk"></a>
                    <a href="#" className="sidebar__social-pinterest"></a>

                </div>
                <p className="sidebar__description">
                    Front-end разработчик. Практик верстки сайтов.
                    Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.
                </p>
                <div className="sidebar__buttons">
                    <button className="sidebar__btn clr-red">Мои работы</button>
                    <button className="sidebar__btn">Написать мне</button>
                </div>
            </div>



        </div>
    );
}

export default Sidebar;