import React from 'react';
import "./Review.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Review = ({product, handleRemoveFormCart}) => {
    const {id, name, price, quantity, img} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-name'>{name}</p>
                <p>Price: <span>${price}</span></p>
                <p>Product Quantity: <span>{quantity}</span></p>
            </div>
            <div>
                <button onClick={() => handleRemoveFormCart(id)} className='del-icon'><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default Review;