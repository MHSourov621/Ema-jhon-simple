import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, ratings, seller, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}star</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;