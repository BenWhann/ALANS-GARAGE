import React from 'react'
import './Popular.css'
import product_data from '../Assets/data.js'
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN FLOWER</h1>
        <hr />
        <div className="popular-item">
            {product_data.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} eighth_price={item.eighth_price} quad_price={item.quad_price} half_price={item.half_price} 
                ounce_price={item.ounce_price} gram_price={item.gram_price} two_gram_price={item.two_gram_price} four_gram_price={item.four_gram_price} eight_gram_price={item.eight_gram_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular