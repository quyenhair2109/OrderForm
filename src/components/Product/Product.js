import React, { Component } from 'react';
import Counter from "./Counter.js";

class Product extends Component {
    handleClick = () => {
        const { id, addToCart } = this.props;
        addToCart(id);
    }

    render() {
        const { name, price, quantity, image, updateQuantity, resetQuantity } = this.props;
        return (
            <div className="product">
                <div className="product-image">
                <img src={image} alt={name} />
                </div>
                <h4 className="product-name">{name}</h4>
                <p className="product-price">{price}</p>
                <Counter
                    productQuantity={quantity}
                    updateQuantity={updateQuantity}
                    resetQuantity={resetQuantity}
                />
                <div className="product-action">
                    <button type="button">ADD TO CART</button>
                </div>
            </div>
        );
    }
}

export default Product;
