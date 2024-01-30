import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
            </div>
            <div className="productdisplay-right-prices">
                {product.category === 'flower'
                ? 
                <>
                <div className="productdisplay-right-price-eighth">{product.eighth_price}</div>
                <div className="productdisplay-right-price-quad">{product.quad_price}</div>
                <div className="productdisplay-right-price-half">{product.half_price}</div>
                <div className="productdisplay-right-price-ounce">{product.ounce_price}</div> 
                </>
                : 
                <>
                <div className="productdisplay-right-price-eighth">{product.gram_price}</div>
                <div className="productdisplay-right-price-quad">{product.two_gram_price}</div>
                <div className="productdisplay-right-price-half">{product.four_gram_price}</div>
                <div className="productdisplay-right-price-ounce">{product.eight_gram_price}</div>
                </>}
            </div>
            <div className="productdisplay-right-quantity">
                <h1>Select Quantity</h1>
                <div className="productdisplay-right-quantities">
                {product.category === 'flower'
                ? 
                <>
                <div>Eighth</div>
                <div>Quad</div>
                <div>Half Ounce</div>
                <div>Ounce</div> 
                </>
                : 
                <>
                <div>Gram</div>
                <div>Two Gram</div>
                <div>Four Gram</div>
                <div>Eight Gram</div>
                </>}
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'>Category : <span>{product.category}</span></p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay