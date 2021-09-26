import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props
    const totalReducer = (preValue, curValue) => preValue + curValue.price
    const total = cart.reduce(totalReducer, 0)
    return (
        <div className="cart">
            <h4 className='success'>My Cart: {props.cart.length}</h4>
            <h5>Total Cost: {total}$</h5>
            <div >
                {
                    cart.map(product =>
                        <li >{product.name}</li>
                    )
                }
            </div>
            <button className="mt-1 btn btn-success">Buy now</button>

        </div>
    );
};

export default Cart;