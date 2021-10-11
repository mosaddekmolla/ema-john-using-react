import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    const {cart} = props;

    const reducer = (previous, current) => previous + current.price;
    const totalPrice = cart.reduce(reducer, 0);

    // let total = 0;
    // for(const product of cart){
    //     total = total + product.price;
    // }



    console.log(props.cart)
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items Ordered: {props.cart.length}</h5>
            {/* <h6>Total : {total}</h6> */}
            <h6>Total: {totalPrice}</h6>
        </div>
    );
};

export default Cart;