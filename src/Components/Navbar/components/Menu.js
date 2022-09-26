import { useState } from "react";
import "../css/Menu.css";
import Navbar from "./Navbar";
import MobLogo from "../../../images/logo-mobile.png";
import DeskLogo from "../../../images/logo-desktop.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import Login from "./Login";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

function Menu( {setOpenCart} ) {
  const { totalItems } = useCart();

  const [openNavbar, setOpenNavbar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="Menu">
      {openNavbar && <Navbar closeNavbar={setOpenNavbar} />}
      <ul className="menu-mobile">
        <span className="menu-cart">
        <IoIosCart className="menu-mobile-cart" 
        onClick={() => {
          setOpenCart(true)
        }}/>
        <span className="menu-mobile-cart-totalitems">{totalItems}</span>
          </span>
        <img className="menu-mobile-logo" src={MobLogo} alt="mobile-logo"></img>
        <AiOutlineMenu
          className="menu-mobile-button"
          onClick={() => {
            setOpenNavbar(true);
          }}/>
      </ul>
      <nav className="menu-desktop">
        <CustomLink to="/home">
          <img
            className="menu-desktop-logo"
            src={DeskLogo}
            alt="desktop-logo"
          ></img>
        </CustomLink>
        <ul className="menu-desktop-list">
          <li className="menu-desktop-items">
            <CustomLink to="/home">
              <p className="menu-desktop-item">Startsida</p>
            </CustomLink>
          </li>
          <li className="menu-desktop-items">
            <CustomLink to="/bookingpage">
              <p className="menu-desktop-item">Boka pass</p>
            </CustomLink>
          </li>
          <li className="menu-desktop-items">
            <CustomLink to="/staff">
              <p className="menu-desktop-item">Personal</p>
            </CustomLink>
          </li>

          <li className="menu-desktop-items">
            <CustomLink to="/webshop">
              <p className="menu-desktop-item">Webbshop</p>
            </CustomLink>
          </li>
          <CustomLink to="/myprofile">
            <HiOutlineUserCircle
              className="menu-desktop-user"
              onClick={() => {
                setOpenLogin(true);
              }}
            />
          </CustomLink>
          <IoIosCart className="menu-desktop-cart" onClick={() => {
          setOpenCart(true)
        }}/>
        </ul>
      </nav>
      {/* <div className="menu-desktop-login">
        {openLogin && <Login />}
        </div> */}
    </div>
  );
}

export default Menu;

function CustomLink({ to, ...props }) {
  return <NavLink to={to} {...props}></NavLink>;
}
