import React from 'react';
import Gamburger from './Gamburger';
import Menu from './Menu';
import Media from 'react-media';

function Navigation(props) {
    return (
        <nav className='navigation__wrap'>
            
            <Media query="(max-width: 320px)" render={() =>
                (
                    <Gamburger />
                )}
            />
            <Media query="(min-width: 321px)" render={() =>
                (
                    <Menu />
                )}
            />
            
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