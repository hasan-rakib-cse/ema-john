import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="main-logo" />

            <nav>
                <NavLink to={'/'} className='navlink'>Home</NavLink>
                <NavLink to={'/shop'} className='navlink'>Shop</NavLink>
                <NavLink to={'/review'} className='navlink'>Review</NavLink>
                <NavLink to={'/manageInventory'} className='navlink'>Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;
