import React from 'react'
import ReactDOM from 'react-dom'

import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'








const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
  return (
    <div className='product'>
        <div>
            <img src={img} alt={name.slice(0, 20) + '...'} />
        </div>
        <div>
            <h4 className='product-name'>{name}</h4>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock - order soon</small></p>
            <button className='main-button' onClick={() => props.addProduct(props.product)}>
                <FontAwesomeIcon icon={faCartShopping} /> add to cart
            </button>

        </div>
    </div>
  )
}

export default Product