import React from "react";
import "./css/Webbshop.css";
import ItemList from "./components/ItemList"
import { CartProvider } from "react-use-cart" 


function Webbshop() {

  return (
        <CartProvider>
      <div className="Webbshop">
        <ItemList />
    </div>
        </CartProvider>
  );
}

export default Webbshop;
