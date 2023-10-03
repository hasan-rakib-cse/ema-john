import React from 'react'

const ReviewItem = (props) => {
    
    const {name, quantity, img, seller, price, stock, key} = props.product
  return (
    <div className='product'>
        <div className='product-image'>
            <img src={img} alt={name.slice(0, 20) + '...'} />
        </div>
        <div>
            <h4 className='product-name'>{name}</h4>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock - order soon</small></p>
            <p>Quantity: {quantity}</p>
            <button className='main-button' onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    </div>
  )
}

export default ReviewItem