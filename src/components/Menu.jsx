import React from 'react';

function Menu(props) {
    return (
        <ul className="navigation__menu">
            <li className="navigation__item"> <a href="#">Главная</a></li>
            <li className="navigation__item navigation__item-rect"><a href="#">Статьи</a>
                <ul className="navigation__menu-article">
                    <li className="navigation__item"> <a href="#">Создание сайтов</a></li>
                    <li className="navigation__item"><a href="#">Интернет-маркетинг</a></li>
                    <li className="navigation__item"> <a href="#">Продвижение видео</a></li>
                </ul>
            </li>
            <li className="navigation__item"> <a href="#">Обо мне</a></li>
            <li className="navigation__item"> <a href="#">Реклама</a></li>

        </ul>
    );
}

export default Menu;