import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    let [products, setProduct] = useState(fakeData.slice(0, 10));
    let [cart, setCart] = useState([]);
    let handleAddProduct = (product)=>{
        setCart([...cart, product]);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map((pd)=><Product key={pd.key} product = {pd} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;