import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosCart,
  IoIosClose,
} from "react-icons/io";

import "../css/WebbshopModal.css";

function WebbshopModal(props) {
  const sizes = ["S", "M", "L", "XL"];
  const oneSize = ["Onesize"];

  const [openDesc, setOpenDesc] = useState(false);
  
  const { addItem } = useCart();
  
  const [selected, setSelected] = useState(null);
  function handleTrainer(e) {
    setSelected(e.target.innerText);
  }


  function addItemToCart() {
    addItem(props.item);
    props.closeModal(false);
  }

  function renderSize() {
    if (props.type === "equipment") {
      return oneSize.map((size) => (
        <div className="modal-size-block size-block-1 modal-onesize">
          {size}
        </div>
      ));
    } else {
      return sizes.map((size, index) => (
        <div className="modal-size-block"
        key={index}
        onClick={handleTrainer}
        style={{
          color: selected === size ? "white" : "",
          border: selected === size ? "none" : "",
          backgroundColor:
            selected === size ? "rgba(0, 39, 84, 0.5)" : "",
            
        }}
        >{size}</div>
      ));
    }
  }


  return (
    <motion.div
      initial={{
        z: 1,
        opacity: 0.3,
      }}
      animate={{
        z: 0,
        opacity: 1,
      }}
      className="WebbshopModal"
    >
      <IoIosClose
        className="modal-exit"
        onClick={() => {
          props.closeModal(false);
        }}
      />
      <img className="modal-img" alt="Product" src={props.img} />
      <div className="desktop-info-container">
        <div className="modal-info-container">
          <div className="modal-info">
            <h1 className="modal-info-title">{props.shortDesc}</h1>
            <h1 className="modal-info-price">{props.price}:-</h1>
          </div>
          <div>
            <p className="modal-info-desc">
              {props.brand} - {props.color}
            </p>
          </div>
        </div>
        <div className="modal-size-container">
          {openDesc && (
            <motion.div
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              className="info-modal"
            >
              <div
                className="info-modal-header"
                onClick={() => {
                  setOpenDesc();
                }}
              >
                <p className="info-modal-title">Om produkten</p>
                <IoIosArrowDown className="info-modal-icon" />
              </div>
              <div className="info-modal-desc">
                <p className="info-modal-title">Passform:</p>
                <p className="info-modal-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  blandit bibendum lectus. Aenean mattis eros sit amet enim
                  molestie, bibendum elementum lorem maximus.
                </p>
              </div>
              <div className="info-modal-desc">
                <p className="info-modal-title">Skötselråd:</p>
                <p className="info-modal-text">
                  Lorem ipsum dolor sit amet, consectetur blandit bibendum
                  lectus. Aenean mattis eros sit amet enim molestie, bibendum
                  elementum lorem maximus.
                </p>
              </div>
            </motion.div>
          )}
          <div className="desktop-info">
            <p className="desktop-info-title">Om produkten:</p>
            <p className="desktop-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, blandit
              bibendum lectus. Aenean mattis eros sit amet enim molestie,
              bibendum elementum lorem maximus.
            </p>
          </div>
          <p className="modal-size-title">Tillgängliga storlekar:</p>
          {/* {sizes.map(size => `<div>${size}</div>`).join('')} */}
          <div className="modal-size-block-container">{renderSize()}</div>
        </div>
        <div className="modal-add-container">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              addItemToCart();
            }}
            className="modal-add"
          >
            Lägg i varukorg <IoIosCart className="modal-add-icon" />
          </motion.button>
        </div>
      </div>
      <div
        onClick={() => {
          setOpenDesc(true);
        }}
        className="modal-more-info"
      >
        <p className="modal-more-info-title">Om produkten</p>
        <IoIosArrowUp className="modal-more-info-icon" />
      </div>
    </motion.div>
  );
}

export default WebbshopModal;
