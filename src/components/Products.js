import React, { Component } from "react";
import styles from "./Products.module.css";
import axios from "axios";
import Card from "./Card";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) =>
      this.setState({
        products: response.data,
      })
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          this.state.products.map((product) => (
            <Card
              image={product.image}
              name={product.title}
              cost={`${product.price} $`}
              key={product.id}
            />
          ))
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    );
  }
}

export default Products;
