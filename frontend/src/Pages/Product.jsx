import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
    const {products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = products.find((event) => event.id === Number(productId));
    return (
        <div>
            <Breadcrumb product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts product={product}/>
        </div>
    )
};

export default Product;