import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../providers/SidebarProvider';
function Menu(props) {
    const { Opened, setOpened } = useContext(SidebarContext)
    return (
        <ul className="navigation__menu">
            <li className="navigation__item" onClick={() => {setOpened(!Opened);}}> <NavLink to="/blog">Главная</NavLink></li>
            <li className="navigation__item navigation__item-rect"onClick={() => {setOpened(!Opened);}}><NavLink to="/Works">Статьи</NavLink>
                <ul className="navigation__menu-article">
                    <li className="navigation__item"onClick={() => {setOpened(!Opened);}}> <a href="#">Создание сайтов</a></li>
                    <li className="navigation__item"onClick={() => {setOpened(!Opened);}}><a href="#">Интернет-маркетинг</a></li>
                    <li className="navigation__item"onClick={() => {setOpened(!Opened);}}> <a href="#">Продвижение видео</a></li>
                </ul>
            </li>
            <li className="navigation__item"> <a href="#"onClick={() => {setOpened(!Opened);}}>Обо мне</a></li>
            <li className="navigation__item"> <a href="#"onClick={() => {setOpened(!Opened);}}>Реклама</a></li>

        </ul>
    );
}

export default Menu;