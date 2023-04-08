import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart , handleClearCart, children}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected item : {cart.length}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total shipping charge: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <div>
                <button onClick={handleClearCart} className='clear-cart-btn'>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;