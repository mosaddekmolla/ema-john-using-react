import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {name, wholePrice, stock, img, seller} = props.data;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <img src={img} alt=""/>
            <div className="product-details">
                <h3 className="product-name">Name: {name}</h3>
                <p>by: {seller}</p>
                <p>Price: ${wholePrice}</p>
                <p>only {stock} left in stock-Order Soon</p>
                <small><p>Order Soon</p></small>
                <button onClick={() => props.handleAddToCart(props.data)} className="btn-regular"> {element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;