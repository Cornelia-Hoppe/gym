import React from "react";
import "../css/Item.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Item(props) {
  return (
    <div className="Item">
      <div onClick={() => props.itemModal(props.id)} className="item-card">
        <article className="item-info">
          <LazyLoadImage className="item-img" alt="Product" src={props.img} />
        </article>
        <div className="info-container">
          <h2 className="item-title">{props.name}</h2>
          <p className="item-price">{props.price}:-</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
