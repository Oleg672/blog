import React from 'react';

function Navigation(props) {
    return (
        <nav className='navigation__wrap'>
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
            <div className="navigation__item navigation__item-profil"> <a href="#">Профиль</a>
                <div className="navigation__searchWrap">
                    <input type="text" name="search" className="navigation__search" placeholder='Поиск по блогу' />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;