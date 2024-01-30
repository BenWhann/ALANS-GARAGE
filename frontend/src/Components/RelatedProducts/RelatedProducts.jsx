import React, { useContext } from 'react';
import './RelatedProducts.css'
import Item from '../Items/Item'
import { ShopContext } from '../../Context/ShopContext';

const RelatedProducts = (props) => {
    const {products} = useContext(ShopContext);
    return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {products.map((item, i) => {
                if (props.product.category === item.category) {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} eighth_price={item.eighth_price} quad_price={item.quad_price} half_price={item.half_price} 
                    ounce_price={item.ounce_price} gram_price={item.gram_price} two_gram_price={item.two_gram_price} four_gram_price={item.four_gram_price} eight_gram_price={item.eight_gram_price}/>
                } else {
                    return null;
                }
            })}
        </div>
    </div>
  )
}

export default RelatedProducts