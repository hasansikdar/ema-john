import React from 'react';
import './OrderSummary.css'
const OrderSummary = ({cart}) => {
   
    return (
        <div className="order-summary-details">
            <h3>Order Summary</h3>
            <ul>
                <li>Selected Items: <span id="quantity">{cart.length}</span></li>
                <li>Total Price: $1140</li>
                <li>Total Shipping Charge: $5</li>
                <li>Tax: $114</li>
                <li><h4>Grand Total: $1559</h4></li>
            </ul>
            <button className="delete">Clear Cart <i className="fa-solid fa-trash-can"></i></button><br></br>
            <button className="review">Review Order <i className="fa fa-arrow-right"></i></button>
        </div>
    );
};

export default OrderSummary;