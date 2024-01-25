import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/gpa_joint.jpg';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("shopAll");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img className='gpa_joint' src={logo} alt="" />
                <p>AL'S GARAGE</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu('shopAll')}}><Link style={{ textDecoration: 'none' }} to='/'>Shop All</Link>{menu === "shopAll" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu('flower')}}><Link style={{ textDecoration: 'none' }} to='/flower'>Flower</Link>{menu === "flower" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu('concentrates')}}><Link style={{ textDecoration: 'none' }} to='/concentrates'>Concentrates</Link>{menu === "concentrates" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img className="cart_icon" src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
};

export default Navbar;