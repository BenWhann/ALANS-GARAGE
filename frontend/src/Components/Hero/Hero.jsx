import React from 'react'
import './Hero.css'
import hand_holding_weed from '../Assets/hand_holding_weed.png'
import cheech_and_chong from '../Assets/cheech_and_chong.png';
import gorilla_cookies_live from '../Assets/gorilla_cookies_live.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>UPCOMING PRODUCTS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Coming Soon</p>
                    <img src={hand_holding_weed} alt="" />
                </div>
                <p>Fire Bud</p>
                <p>For All</p>
            </div>
            <div className="hero-latest-btn">
                <div>New Products</div>
                {/* <img src={} alt="" /> */}
            </div>
        </div>
        <div className="hero-right">
            <img className='heroImg' src={gorilla_cookies_live} alt="" />
        </div>
    </div>
  )
}

export default Hero