import React, { Component } from "react";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cart: this.props.cartItems,
          showCheckout: false
        };
        this.formatCurrency = this.formatCurrency.bind(this);
    }

    formatCurrency(cart) {
        let total = 0;
        for ( let item of cart){
            total = total + item.price * item.quantity;
        }
        return total;
    }
    
    render() {
        let cartItems = [];
        cartItems = this.state.cart.map(item => {
            return (
                <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name}></img>
                    <div className="item-info">
                      <p className="item-name">{item.name}</p>
                      <div className="item-price">
                        {item.price}{"$"} x {item.quantity}{" "}
                        <button
                          className="button"
                          onClick={this.props.removeProduct.bind(this, item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                </li>
            );
        });
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart">
                        <h3 className="cart-header">
                            Your cart is empty!
                        </h3>
                    </div>
                ) : (
                    <div className="cart">
                        <h3 className="cart-header">
                            You have {cartItems.length} item in the cart{" "}
                        </h3>
                        <ul className="cart-list">
                            {cartItems}
                        </ul>
                        <div className="total-action">
                            <p className="total">
                                Total:{" "}
                                {this.formatCurrency(this.state.cart)} {"$"}
                            </p>
                            <button
                                onClick={() => {
                                this.setState({ showCheckout: true });
                                }}
                                className="button primary"
                            >
                                Proceed
                            </button>
                        </div>
                    </div>
                )} 
            </div>
        )
    }
}

export default Cart;