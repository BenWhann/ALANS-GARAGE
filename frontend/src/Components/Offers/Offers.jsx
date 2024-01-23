import React from 'react'
import './Offers.css'
import afghan_kush_live from '../Assets/afghan_kush_live.JPG'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLING PRODUCTS</p>
            <button>Check Now</button>
        </div>

        <div className="offers-right">
            <img className='offersImg' src={afghan_kush_live} alt="" />
        </div>
    </div>
  )
}

export default Offers
