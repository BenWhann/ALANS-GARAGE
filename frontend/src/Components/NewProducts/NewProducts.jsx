import React from 'react'
import './NewProducts.css'
import products from '../Assets/products'
import Item from '../Items/Item'

const NewProducts = () => {
  return (
    <div className='new-products'>
        <h1>NEW PRODUCTS</h1>
        <hr />
        <div className="products">
            {products.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} eighth_price={item.eighth_price} quad_price={item.quad_price} half_price={item.half_price} 
                ounce_price={item.ounce_price} gram_price={item.gram_price} two_gram_price={item.two_gram_price} four_gram_price={item.four_gram_price} eight_gram_price={item.eight_gram_price}/>
            })}
        </div>
    </div>
  )
}

export default NewProducts