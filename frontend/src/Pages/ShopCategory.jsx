import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
    const {products} = useContext(ShopContext);
    return (
        <div className='shop-category'>
            {/* <img className='shopcategory-banner' src={props.banner} alt="" /> */}
            <div className="shop-category-indexSort">
                <p>
                    <span>Showing 1-{props.category === 'flower' ? '4' : '1'}</span> out of 5 total products.
                </p>
                <div className="shopcategory-sort">
                    Sort by <img className='dropdownImg' src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shop-category-products">
                {products.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} eighth_price={item.eighth_price} quad_price={item.quad_price} half_price={item.half_price} 
                        ounce_price={item.ounce_price} gram_price={item.gram_price} two_gram_price={item.two_gram_price} four_gram_price={item.four_gram_price} eight_gram_price={item.eight_gram_price}/>
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
};

export default ShopCategory;