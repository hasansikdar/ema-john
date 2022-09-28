import React, { useEffect, useState } from 'react';
import './Shop.css';
import OrderSummary from './OrderSummary/OrderSummary';
import ProductItem from './Product/Product';
import '../Shop/Product/Product.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    const [cart, setCart] = useState([]);
    const EventHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="products">
               <div className="product-container">
                {
                    products.map(product => <ProductItem EventHandler={EventHandler}  key={product.id} product={product}></ProductItem>)
                }
               </div>
            </div>
            <div className="order-summary">
                <OrderSummary cart={cart}></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;