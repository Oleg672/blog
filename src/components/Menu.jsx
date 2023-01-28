import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../providers/SidebarProvider';
import { CategoriesContext } from '../providers/CategoriesProvider';
function Menu(props) {
    const { Opened, setOpened } = useContext(SidebarContext)
    
    const { Categories, setCategories } = useContext(CategoriesContext)
    return (
        <>
            <ul className="navigation__menu">
                <li className="navigation__item" onClick={() => { setOpened(!Opened); setCategories('') }}> <NavLink to="/blog">Главная</NavLink></li>
                <li className="navigation__item navigation__item-rect"><NavLink to="/">Статьи</NavLink>
                    <ul className="navigation__menu-article">
                        <li className="navigation__item" onClick={() => { setOpened(!Opened); setCategories('Cоздание сайтов') }}> <NavLink to="/blog">Создание сайтов</NavLink></li>
                        <li className="navigation__item" onClick={() => { setOpened(!Opened); setCategories('Интернет-маркетинг') }}> <NavLink to="/blog">Интернет-маркетинг</NavLink></li>
                        <li className="navigation__item" onClick={() => { setOpened(!Opened); setCategories('Продвижение видео') }}> <NavLink to="/blog">Продвижение видео</NavLink></li>
                    </ul>
                </li>
                <li className="navigation__item"> <a href="#" onClick={() => { setOpened(!Opened); }}>Обо мне</a></li>
                <li className="navigation__item"> <a href="#" onClick={() => { setOpened(!Opened); }}>Реклама</a></li>
                <li className="navigation__item" onClick={() => { setOpened(!Opened); }}><NavLink to="/profile">Профиль</NavLink></li>

            </ul>

            
        </>

    );
}

export default Menu;