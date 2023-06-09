import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {

    const savedCart = useLoaderData();
    console.log(savedCart);

    const [cart, setCart] = useState(savedCart);

    const handleRemoveFormCart = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    } 


    return (
        <div>
            <div className="shop-container">
                <div className="review-product">
                    {
                        cart.map(product => <Review
                            key={product.id}
                            product={product}
                            handleRemoveFormCart={handleRemoveFormCart}
                        ></Review>)
                    }
                </div>
                <div className="order-container">
                    <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='product-link' to="/Checkout">
                            <button className='product-review-btn'>Proceed Checkout</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;