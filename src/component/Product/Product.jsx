import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { name, price, ratings, seller, img } = props.product;

    const handleAdToCart = props.handleAdToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}star</p>
            </div>
            <button onClick={() => handleAdToCart(props.product)} className='btn-cart'>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;