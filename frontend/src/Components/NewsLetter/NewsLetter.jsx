import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers Sent To Your Email</h1>
        <p>Subscribe to our newsletter to stay updated</p>
        <div>
            <input type="email" placeholder='Enter Your Email Here' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter