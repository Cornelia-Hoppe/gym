import React from "react";
import { motion } from "framer-motion";
import { useCart } from "react-use-cart";
import { IoIosClose } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
import { SiKlarna } from "react-icons/si";

import "../css/Cart.css";
//INSTALLERA npm install react-use-car

function Cart({ closeCart }) {
  const {
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

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
          <p className="cart-header-p">{totalUniqueItems} produkter</p>
        </div>
      </div>
      <div className="cart-items">
        {items.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <img src={item.img} alt="Product" className="cart-item-img" />
              <div className="cart-item-rows">
                <div>
                  <div className="cart-item-row-1">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <BsTrash
                      onClick={() => removeItem(item.id)}
                      className="cart-item-delete"
                    />
                  </div>
                  <div className="cart-item-row-2">
                    <p className="cart-item-size-color">S | {item.color}</p>
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
          <h4 className="cart-checkout-price">{cartTotal}kr</h4>
          </div>
        </div>
        <div className="cart-checkout-buttons">
          <button className="cart-checkout-button">Till kassan</button>
          <button className="cart-checkout-klarna">Fortsätt med <div className="klarna-container">
            <SiKlarna className="klarna-icon"/>
          </div></button>
        </div>
      </div>
        <h5>
          Cart ({totalUniqueItems}) Total Items: ({totalItems})
        </h5>
    </motion.div>
  );
}

export default Cart;
