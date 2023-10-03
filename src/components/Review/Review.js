import React, { useEffect, useState } from 'react'
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager'
import fakeData from '../../fakeData'
import ReviewItem from '../ReviewItem/ReviewItem'
import Cart from '../Cart/Cart'

const Review = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    // cart
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);

    // const cartProducts = productKeys.map(key => saveCart[key]) // array er moddde dekhabe koyta product kotobar add hoise
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key)
      product.quantity = saveCart[key]; // object er moddhe key pass korle se object er value paowa jay.
      return product;
    })
    setCart(cartProducts);
  
  }, [])

  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter(pd => pd.key !== productKey)
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }
  
  return (
    <div className='twin-container'>
        <div className="product-container">
          {cart.map(pd => <ReviewItem key={pd.key} product={pd} removeProduct={handleRemoveProduct} />)}
        </div>
        <div className="cart-container">
            <Cart cart={cart} />  
        </div>
    </div>
  )
}

export default Review