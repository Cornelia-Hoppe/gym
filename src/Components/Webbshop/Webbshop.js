import React, { useState } from "react";
import Menu from "../Navbar/components/Menu";
import "./css/Webbshop.css";
import ItemList from "./components/ItemList"
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart" 


function Webbshop() {
  const [openCart, setOpenCart] = useState(false);

  return (
        <CartProvider>
      <div className="Webbshop">
        <Menu setOpenCart={setOpenCart}/>
        {openCart && (
        <Cart
         closeCart={setOpenCart}
        />
        )}
        <ItemList />
    </div>
        </CartProvider>
  );
}

export default Webbshop;
