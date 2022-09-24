import React from 'react';

const Cart = (props) => {
    let cart = props.cart;

    console.log(cart);

    let itemsPrice = cart.reduce((acc, curr)=>{
        acc+=curr.price;
        return acc;
    }, 0);

    let totalShippingCost = cart.reduce((acc, curr)=> acc+=curr.shipping, 0);

    if(itemsPrice > 35){
        totalShippingCost = 0;
    }else if(itemsPrice > 15){
        totalShippingCost = 4.99;
    }

    let tax = (itemsPrice/10);

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Orderd: {cart.length}</p>
            <p>Items Price: {itemsPrice.toFixed(2)}</p>
            <p><small>Shipping Cost: {totalShippingCost.toFixed(2)}</small></p>
            <p><small>Tax: {tax.toFixed(2)}</small></p>
            <p>Total Cost: {(itemsPrice + totalShippingCost + tax).toFixed(2)}</p>
        </div>
    );
};

export default Cart;