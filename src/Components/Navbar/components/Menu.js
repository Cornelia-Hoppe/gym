import { useState } from "react";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Cart from "../../Webbshop/components/Cart"
import DesktopLogin from "./DesktopLogin";
import "../css/Menu.css";
import {useCart} from "react-use-cart";
//Icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";

function Menu({ setOpenCart }) {
  const { totalItems } = useCart();

  const [openNavbar, setOpenNavbar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  function openSignUpFunction() {
    setOpenSignUp(true);
    setOpenLogin(false);
    setOpenNavbar(false);
    //   document.body.style.overflow = "hidden";
  }

  // function closeSignUpFunction(){
  //   document.body.style.overflow = "auto";
  //   setOpenSignUp(false);
  // }

  return (
    <div className="Menu">
      {openSignUp && <SignUp closeSignup={setOpenSignUp} />}
      {openNavbar && (
        <Navbar
          setOpenSignUp={openSignUpFunction}
          closeNavbar={setOpenNavbar}
        />
      )}
      
      <ul className="menu-mobile">
        <span className="menu-cart">
        <IoIosCart className="menu-mobile-cart" 
        onClick={() => {
          setOpenCart(true)
        }}/>
        <span className="menu-mobile-cart-totalitems">{totalItems}</span>
        </span>
        <h1 className="menu-mobile-logo">Sportix</h1>
        <AiOutlineMenu
          className="menu-mobile-button"
          onClick={() => {
            setOpenNavbar(true);
          }}
        />
      </ul>
      {/* DESKTOP */}
      <nav className="menu-desktop">
        {openSignUp && <SignUp closeSignup={setOpenSignUp} />}
        <h1 className="menu-desktop-logo">Sportix</h1>
        <ul className="menu-desktop-list">
          <li className="menu-desktop-items">
            <a
              className="menu-desktop-item"
              onClick={() => {
                setOpenNavbar(true);
              }}
            >
              Startsida
            </a>
          </li>
          <li className="menu-desktop-items">
            <a
              className="menu-desktop-item"
              onClick={() => {
                setOpenNavbar(true);
              }}
            >
              Boka pass
            </a>
          </li>
          <li className="menu-desktop-items">
            <a
              className="menu-desktop-item"
              onClick={() => {
                setOpenNavbar(true);
              }}
            >
              Personal
            </a>
          </li>
          <li className="menu-desktop-items">
            <a
              className="menu-desktop-item"
              onClick={() => {
                setOpenNavbar(true);
              }}
            >
              Webbshop
            </a>
          </li>

          <HiOutlineUserCircle
            className="menu-desktop-user"
            onClick={() => setOpenLogin((openLogin) => !openLogin)}
          />

          <span className="menu-cart">
          <IoIosCart onClick={() => {
          setOpenCart(true)
        }} className="menu-desktop-cart" />
        
        <span className="menu-mobile-cart-totalitems">{totalItems}</span>
        </span>
        </ul>
      </nav>
      {openLogin && <DesktopLogin setOpenSignUp={openSignUpFunction} />}
    </div>
  );
}

export default Menu;
