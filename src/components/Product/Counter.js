import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.productQuantity };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.inputQuantity = React.createRef();
  }

  increment(e) {
    this.setState(
      prevState => ({
        value: Number(prevState.value) + 1
      }),
      function() {
        this.props.updateQuantity(this.state.value);
      }
    );
    e.preventDefault();
  }

  decrement(e) {
    e.preventDefault();
    if (this.state.value <= 1) {
      return this.state.value;
    } else {
      this.setState(
        prevState => ({
          value: Number(prevState.value) - 1
        }),
        function() {
          this.props.updateQuantity(this.state.value);
        }
      );
    }
  }

  setInputQuantity(e) {
    this.setState(
      {
        value: this.inputQuantity.current.value
      },
      function() {
        this.props.updateQuantity(this.state.value);
      }
    );
  }

  render() {
    return (
      <div className="stepper-input">
        <span className="decrement" onClick={this.decrement}>
          –
        </span>
        <input
          ref={this.inputQuantity}
          type="number"
          className="quantity"
          value={this.state.value}
          onChange={this.setInputQuantity.bind(this)}
        />
        <span className="increment" onClick={this.increment}>
          +
        </span>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;
