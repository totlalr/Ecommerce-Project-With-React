import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

class Products extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: [],
  //   };
  // }

  // componentDidMount() {
  //   axios.get("https://fakestoreapi.com/products/1").then((response) =>
  //     this.setState({
  //       products: response.data,
  //     })
  //   );
  // }
  render() {
    return (
      <div>
        {/* {this.state.products.map((product) => (
          <Card
            image={product.image}
            name={product.title}
            cost={product.cost}
            key={product.id}
          />
        ))} */}
        products.....!
      </div>
    );
  }
}

export default Products;
