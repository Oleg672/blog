import React, { useContext } from 'react';
import { SidebarContext } from '../providers/SidebarProvider';
function Menu(props) {
    const { Opened, setOpened } = useContext(SidebarContext)
    return (
        <ul className="navigation__menu">
            <li className="navigation__item" onClick={() => {setOpened(!Opened);}}> <a href="#">Главная</a></li>
            <li className="navigation__item navigation__item-rect"onClick={() => {setOpened(!Opened);}}><a href="#">Статьи</a>
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