import React from "react";
import "./Card.css";

function Card({ id, image, price, title }) {
  return (
    <section className="card">
      <img className="product-image" src={image} alt="ProductImage" />
      <section className="card-title">
        <h1>{title}</h1>
        <h3>{price}</h3>
      </section>
    </section>
  );
}

export default Card;
