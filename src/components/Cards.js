import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
  constructor() {
    super();

    this.state = {
      phoneData: [
        { id: 1, image: iphonex, name: "Iphone X", cost: "500 $" },
        { id: 2, image: iphone11, name: "Iphone 11", cost: "600 $" },
        { id: 3, image: iphone12, name: "Iphone 12", cost: "800 $" },
        { id: 4, image: s21, name: "S21 Ultra", cost: "790 $" },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.phoneData.map((phone) => (
          <Card
            image={phone.image}
            name={phone.name}
            cost={phone.cost}
            key={phone.id}
            id={phone.id}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
