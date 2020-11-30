import React, { Component } from "react";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cart: this.props.cartItems,
          showCheckout: false
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
            total: this.props.total,
        };
        console.log(order);
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
                                {this.props.total}{" $"}
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
                        {this.state.showCheckout && (
                            <form onSubmit={this.handleSubmit} className="order-form">
                              <ul className="form-container">
                                <li>
                                  <label>Email</label>
                                  <input
                                    name="email"
                                    type="email"
                                    required
                                    onChange={this.handleInput}
                                  ></input>
                                </li>
                                <li>
                                  <label>Name</label>
                                  <input
                                    name="name"
                                    type="text"
                                    required
                                    onChange={this.handleInput}
                                  ></input>
                                </li>
                                <li>
                                    <label>Delivery Date</label>
                                    <input
                                    name="date"
                                    type="date"
                                    required
                                    onChange={this.handleInput}
                                  ></input>
                                </li>
                                <li>
                                  <label>Address</label>
                                  <input
                                    name="address"
                                    type="text"
                                    required
                                    onChange={this.handleInput}
                                  ></input>
                                </li>
                                <li>
                                  <button className="button primary" type="submit">
                                    Checkout
                                  </button>
                                </li>
                              </ul>
                            </form>
                        )}
                    </div>
                )} 
            </div>
        )
    }
}

export default Cart;