import React, { useEffect, useState } from 'react';
import './Product.css';

const ProductItem = (props) => {
    const {product, EventHandler} = props;
    const {id, img, name, price, ratings, seller} = product;
    // const getSelectedItem = document.getElementById('quantity').innerText = cart.length;
    return(
        <div className='card'>
            <img src={img} />
            
            <ul>
                <li><h3>{name}</h3></li>
                <li><h5>Price: ${price}</h5></li>
                <div className="divider1"></div>
                <li><p>Manufacture: {seller}</p></li>
                <li><p>Rating: {ratings} star</p></li>
            </ul>
            <div className="divider"></div>
            <button onClick={() => EventHandler(product)}>Add to Cart <i className="fa fa-shopping-cart"></i></button>
        </div>
    )
}








export default ProductItem;