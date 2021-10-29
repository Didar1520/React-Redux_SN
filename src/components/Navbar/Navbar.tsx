import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.sass';
// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
//     'active' : 'Baksndakdn_actve'
 // }




const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink className={s.items} to="/profile">Профиль</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs">Диалоги</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users">Друзья</NavLink>
        </div>
        
        <div className={s.item}>
            <NavLink to="/news">Новости</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music">Аудио</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings">Настройки</NavLink>
        </div>
    </nav>
}

export default Navbar;