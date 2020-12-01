import React, { Component } from 'react';
import Counter from "./Counter.js";

class Product extends Component {

    render() {
        const { id, name, price, quantity, image, updateQuantity} = this.props;
        let selectedProduct = {
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: quantity
        }
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
                />
                <div className="product-action">
                    <button 
                        type="button" 
                        onClick={this.props.addToCart.bind(
                            this,
                            selectedProduct
                        )}
                    >ADD TO CART
                    </button>
                </div>
            </div>
        );
    }
}

export default Product;
