import React from "react";
import { motion } from "framer-motion";
import { useCart } from "react-use-cart";
import { IoIosClose } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
import { SiKlarna } from "react-icons/si";
import emptyCart from "../images/empty-cart.png";

import "../css/Cart.css";

function Cart({ closeCart }) {
  const {
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    isEmpty
  } = useCart();

  function ifEmptyCart() {
    if (isEmpty) {
      return(
        <div className="empty-cart-container">
          <img src={emptyCart} className="empty-cart-image"/>
          <h1 className="empty-cart-title">Din varukorg är tom!</h1>
        </div>);
    }
  }

  return (
    <motion.div
    initial={{
      x: -100,
      opacity: 0,
    }}
    animate={{
      x: 0,
      opacity: 1,
    }} className="Cart">
      <div className="cart-header">
        <div className="cart-header-1">
          <h1 className="cart-header-title">Kundvagn</h1>
          <IoIosClose
            className="cart-header-exit"
            onClick={() => closeCart(false)}
            />
        </div>
        <div className="cart-header-2">
          <p className="cart-header-p">{totalUniqueItems} produkter ({totalItems} totalt)</p>
        </div>
      </div>
      <div className="cart-items">
        {ifEmptyCart()}
        {items.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <img src={item.img} alt="Product" className="cart-item-img" />
              <div className="cart-item-rows">
                <div>
                  <div className="cart-item-row-1">
                    <h3 className="cart-item-name">{item.produktNamn}</h3>
                    <BsTrash
                      onClick={() => removeItem(item.id)}
                      className="cart-item-delete"
                      />
                  </div>
                  <div className="cart-item-row-2">
                    <p className="cart-item-size-color">{item.chosenSize} | {item.color}</p>
                  </div>
                </div>
                <div className="cart-item-row-3">
                  <p className="cart-item-price">{item.price}kr</p>
                  <div className="cart-item-quantity-section">
                    <BiMinus
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="cart-item-quantity-buttons"
                    />
                    <p className="cart-item-quantity">{item.quantity}</p>
                    <BiPlus
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="cart-item-quantity-buttons"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-checkout">
        <div className="cart-checkout-price-container">
          <p>Totalt belopp</p>
          <div>
          <h3 className="cart-checkout-price">{cartTotal}kr</h3>
          </div>
        </div>
        <div className="cart-checkout-buttons">
          <button className="cart-checkout-button">Till kassan</button>
          <button className="cart-checkout-klarna">Fortsätt med <div className="klarna-container">
            <SiKlarna className="klarna-icon"/>
          </div></button>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;
