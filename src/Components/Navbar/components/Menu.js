import { useState } from "react";
import '../css/Menu.css';
import Navbar from './Navbar'

import { AiOutlineMenu } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import Login from "./Login";

function Menu() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    

  return (
    <div className="Menu">
      {openNavbar && <Navbar closeNavbar={ setOpenNavbar }/>}
      <ul className="menu-mobile">
        <IoIosCart className="menu-mobile-cart"/>
      <h1 className="menu-mobile-logo">Sportix</h1>
        <AiOutlineMenu 
        className='menu-mobile-button'
        onClick={() => {
          setOpenNavbar(true)
        }}/>
        </ul>
        <nav className="menu-desktop">
            <h1 className="menu-desktop-logo">Sportix</h1>
        <ul className="menu-desktop-list">
            <li className="menu-desktop-items"><a className="menu-desktop-item" onClick={() => {setOpenNavbar(true)}}>Startsida</a></li>
            <li className="menu-desktop-items"><a className="menu-desktop-item" onClick={() => {setOpenNavbar(true)}}>Boka pass</a></li>
            <li className="menu-desktop-items"><a className="menu-desktop-item" onClick={() => {setOpenNavbar(true)}}>Personal</a></li>
            <li className="menu-desktop-items"><a className="menu-desktop-item" onClick={() => {setOpenNavbar(true)}}>Webbshop</a></li>
            
            <HiOutlineUserCircle className="menu-desktop-user" onClick={() => {
                setOpenLogin(true)

            }} />
            <IoIosCart className="menu-desktop-cart" />
        </ul>
        </nav>
        {/* <div className="menu-desktop-login">
        {openLogin && <Login />}
        </div> */}
    </div>
  )
}

export default Menu;