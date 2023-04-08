import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import "./Order.css"
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {

    const savedCart = useLoaderData();
    console.log(savedCart);

    const [cart, setCart] = useState(savedCart);

    const handleRemoveFormCart = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;