import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/gpa_joint.jpg';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {

    const [menu, setMenu] = useState("shopAll");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img className='gpa_joint' src={logo} alt="" />
                <p>AL'S GARAGE</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu('shopAll')}}>Shop All{menu === "shopAll" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu('flower')}}>Flower {menu === "flower" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu('hash')}}>Hash {menu === "hash" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img className="cart_icon" src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
};

export default Navbar;