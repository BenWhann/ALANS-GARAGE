import React from 'react';
import './Navbar.css';
import logo from '../Assets/gpa_joint.jpg';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img className='gpa_joint' src={logo} alt="" />
                <p>AL'S GARAGE</p>
            </div>
            <ul className="nav-menu">
                <li>Shop All</li>
                <li>Flower</li>
                <li>Hash</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img className="cart_icon" src={cart_icon} alt="" />
            </div>
        </div>
    )
};

export default Navbar;