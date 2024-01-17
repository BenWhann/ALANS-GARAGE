import React from 'react'
import './Hero.css'
import hand_holding_weed from '../Assets/hand_holding_weed.png'
import cheech_and_chong from '../Assets/cheech_and_chong.png';

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
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                {/* <img src={} alt="" /> */}
            </div>
        </div>
        <div className="hero-right">
            <img src={cheech_and_chong} alt="" />
        </div>
    </div>
  )
}

export default Hero