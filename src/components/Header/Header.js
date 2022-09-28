import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const menuBar = () => {
        const MenuBarItem = document.getElementById('menu');
        MenuBarItem.classList.toggle('active');
        // MenuBarItem.addEventListener('click', () => {
        //    const MenuItemClass = document.getElementById('menu')
        //    MenuItemClass.classList.toggle('active');
        // })
    }
    return (
        <nav>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu-bar">
                    <i id="menu-bar" onClick={menuBar} className="fa fa-bars"></i>
                </div>
                <div id="menu" className="menu">
                    <ul>
                        <li><a href="/home">order</a></li>
                        <li><a href="/order review">order review</a></li>
                        <li><a href="/manage inventory">manage inventory</a></li>
                        <li><a href="/login">login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;