import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = products.find((event) => {event.id === Number(productId)});
    return (
        <div>
            
        </div>
    )
};

export default Product;