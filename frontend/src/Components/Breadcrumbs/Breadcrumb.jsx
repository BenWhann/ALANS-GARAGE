import React from 'react'
import './Breadcrumb.css'
import forward_slash from '../Assets/forward_slash.png'

const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className='breadcrumb'>
      HOME <img className='slash' src={forward_slash} alt="" /> SHOP <img className='slash' src={forward_slash} alt="" /> {product.category} <img className='slash' src={forward_slash} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumb