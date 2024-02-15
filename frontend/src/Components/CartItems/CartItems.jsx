import React from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react';
import remove_icon from '../Assets/remove-icon.jpg';

const CartItems = () => {
    const {products,cartItems,removeFromCart,addToCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {products.map((event)=>{
            if(cartItems[event.id]>0) {
                console.log(parseInt(event.eighth_price, 10), cartItems[event.id])
                return <div>
                    <div className="cart-items-format">
                        <img src={event.image} alt="" className='carticon-product-icon'/>
                        <p>{event.name}</p>
                        <p>{event.eighth_price}</p>
                        <button className='cartitems-quantity'>{cartItems[event.id]}</button>
                        <p>{parseFloat(event.eighth_price)*cartItems[event.id]}</p>
                        <img src={remove_icon} onClick={()=>{removeFromCart(event.id)}} alt="" />
                    </div>
                <hr />
                </div>
            }
        })}

    </div>
  )
}

export default CartItems