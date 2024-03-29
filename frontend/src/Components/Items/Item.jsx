import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className='itemImage' src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
          <div className='item-prices-flower'>
            <div className="item-price-eighth">
                {props.eighth_price}
            </div>
            <div className="item-price-quad">
                {props.quad_price}
            </div>
            <div className="item-price-half">
                {props.half_price}
            </div>
            <div className="item-price-ounce">
                {props.ounce_price}
            </div>
          </div>

          <div className='item-prices-hash'>
            <div className="item-price-gram">
                {props.gram_price}
            </div>
            <div className="item-price-two-gram">
                {props.two_gram_price}
            </div>
            <div className="item-price-four-gram">
                {props.four_gram_price}
            </div>
            <div className="item-price-eight-gram">
                {props.eight_gram_price}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Item