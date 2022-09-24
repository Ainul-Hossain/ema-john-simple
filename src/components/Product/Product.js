import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faS, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    let {img, name, seller, price, stock} = props.product;
    
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <p className='product-name'>{name}</p>
                <p><small>by:</small> {seller}</p>
                
                <div className="test">
                    <div>
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={()=>props.handleAddProduct(props.product)} className='cart-btn'> <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>
                    </div>
                    <div className="">
                        {/* <span className='test2'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;