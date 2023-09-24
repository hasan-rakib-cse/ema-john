import React, { useState } from 'react';

import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const firat10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firat10);

    const handleAddProduct = (product) => {
        console.log('Product Added', product);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product key={pd.key} product={pd} addProduct={handleAddProduct} />)
                }
            </div>
            <div className="cart-container">
                <h3>This is Card</h3>
            </div>
        </div>
    );
};

export default Shop;