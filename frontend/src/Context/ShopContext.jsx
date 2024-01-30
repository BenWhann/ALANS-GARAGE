import React, { createContext } from "react";
import products from '../Components/Assets/products.js'
import { useState } from "react";

export const ShopContext = createContext(null);

const getCart = () => {
    let cart = {};
    for (let index = 0; index < products.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,[itemId]:prev[itemId]+1
        }))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,[itemId]:prev[itemId]-1
        }))
    }

    const contextValue = {products, cartItems, addToCart, removeFromCart};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;