import React, { useEffect, useState } from 'react'
import { clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager'
import fakeData from '../../fakeData'
import ReviewItem from '../ReviewItem/ReviewItem'
import Cart from '../Cart/Cart'
import happyImage from '../../images/giphy.gif'

const Review = () => {
  const [cart, setCart] = useState([])
  const [orderPlaced, setOrderPlaced] = useState(false)

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

  const handlePlacedOrder = () => {
    setCart([]);
    setOrderPlaced(true)
    clearLocalShoppingCart()
  }
  
  let thankYou;
  if(orderPlaced) {
    thankYou = <img src={happyImage} alt="" />
  } 
  return (
    <div className='twin-container'>
        <div className="product-container">
          {cart.map(pd => <ReviewItem key={pd.key} product={pd} removeProduct={handleRemoveProduct} />)}
          { thankYou }
        </div>
        <div className="cart-container">
            <Cart cart={cart} />  
            <button className='main-button' onClick={handlePlacedOrder}>Place Order</button>
        </div>
    </div>
  )
}

export default Review