import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header-div">
            <div className="left-side">            
            <h1> <span><FontAwesomeIcon icon={faUtensilSpoon} /></span> Food Era</h1>
            </div>
            <div className="right-side">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Contact</a>
                <a href="">Shop</a>
            </div>
        </div>
    );
};

export default Header;