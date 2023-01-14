import React from 'react';
import Gamburger from './Gamburger';
import Menu from './Menu';

function Navigation(props) {
    return (
        <nav className='navigation__wrap'>
            <Gamburger />
            <Menu />
            <div className="navigation__item navigation__item-profil"> 
            {/* <a href="#">Профиль</a> */}
                <div className="navigation__searchWrap">
                    <input type="text" name="search" className="navigation__search" placeholder='Поиск по блогу' />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;