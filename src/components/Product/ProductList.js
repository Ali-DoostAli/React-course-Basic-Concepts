import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('ProductList componentDidUpdate');
  }
  renderProduct = () => {
    const {onChange,onDecrement,onIncrement,onDelete,products} = this.props;
    if (products.length === 0)
      return <div>there is no product in cart </div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => onDelete(product.id)}
          onIncrement={() => onIncrement(product.id)}
          onDecrement={() => onDecrement(product.id)}
          onChange={(e) => onChange(e, product.id)}
        />
      );
    });
  };

  render() {
    console.log('ProductList.js render');
    const {products} = this.props;
    return (
      <div>
        {!products.length && <div>go to shopping</div>}
        {this.renderProduct()}
      </div>
    );
  }
}
export default ProductList;
