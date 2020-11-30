import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "../Product/Product.js";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15,
      currentPage: 1,
      itemsPerPage: 8,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const products = this.props.products;

    // Logic for displaying items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item) => {
      return (
        <Product
          key={item.id}
          price={item.price}
          name={item.name}
          image={item.image}
          id={item.id}
          addToCart={this.props.addToCart}
          quantity={this.props.quantity}
          updateQuantity={this.props.updateQuantity}
        />
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} className={number === currentPage ? "page-number active" : "page-number"} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div className="product-page">
        <div className="products-wrapper">{renderItems}</div>
        <ul className="page-pagination">{renderPageNumbers}</ul>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
