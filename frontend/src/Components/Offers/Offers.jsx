import React from 'react'
import './Offers.css'
import afghan_kush_live from '../Assets/afghan_kush_live.JPG'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>GOOD ASS</h1>
            <h1>DEALS FOR YOU</h1>
            <p>ON MINNESOTA'S BEST ORGANICALLY GROWN CANNABIS</p>
            <button>We are not taxing out here</button>
        </div>

        <div className="offers-right">
            <img className='offersImg' src={afghan_kush_live} alt="" />
        </div>
    </div>
  )
}

export default Offers
