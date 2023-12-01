import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
            <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Профиль</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Команда</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>Блог</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>О клубе</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Партнеры</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;

