import React from 'react'
import './Footer.css'
import gpa_joint from '../Assets/gpa_joint.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import x_icon from '../Assets/x_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img className='footer-logo-img' src={gpa_joint} alt="" />
            <p>AL'S GARAGE</p>
        </div>
        <ul className="footer-links">
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img className='footerImg' src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img className='footerImg' src={x_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img className='footerImg' src={facebook_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer