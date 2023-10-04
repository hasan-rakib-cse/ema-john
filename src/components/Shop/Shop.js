import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    useEffect(() => {
      const saveCart = getDatabaseCart();
      const productKeys = Object.keys(saveCart)
      const previousCart = productKeys.map(existingKey => {
        const product = fakeData.find(pd => pd.key === existingKey)
        product.quantity = saveCart[existingKey];
        return product;
      })
      setCart(previousCart)
    }, [])
    

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct]; // jesob item match kortase na segulo sob & je item find hoise setar 1 piece newCart e rakhtasi
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);


        // const newCart = [...cart, product];
        // setCart(newCart);

        // const sameProduct = newCart.filter(pd => pd.key === product.key);
        // const count = sameProduct.length;
        // addToDatabaseCart(product.key, count)
    }

    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    products.map(product => <Product addProduct={handleAddProduct} showAddToCart={true} key={product.key} product={product} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} reviewBtn={<Link to={'/review'}><button className='main-button' style={{textDecoration: 'none'}}>Review Order</button></Link>} />
            </div>
        </div>
    );
};

export default Shop;