import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ListItem from "./ListItem";
import Login from "./Login";
import "../css/Navbar.css";
import SignUp from "./SignUp";
import { motion } from "framer-motion";
//Icons
import { IoIosClose, IoMdHome, IoIosCart } from "react-icons/io";
//import { GrYoga } from "react-icons/gr";
import { BsPersonCircle, BsFilePerson } from "react-icons/bs";
import { TbYoga } from "react-icons/tb";

//Routes

//installer följande:
//npm install react-icons --save
// npm install -S react-router-dom
//nmp install framer-motion

function NavBar({ closeNavbar, updateAfterLogin }) {
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      className="Navbar"
    >
      {openSignUp && <SignUp closeSignup={setOpenSignUp} />}
      <div className="navbar-header">
        <IoIosClose
          className="exit-button"
          onClick={() => closeNavbar(false)}
        />
      </div>
      <div className="navbar-list">
        <CustomLink to="/">
          <ListItem
  
            name="Startsida"
            icon={<IoMdHome className="icon" />}
          />
        </CustomLink>
        <CustomLink to="/bookingpage">
          <ListItem name="Boka pass" icon={<TbYoga className="icon" />} />
        </CustomLink>
        <CustomLink to="/myprofile">
          <ListItem
            name="Mina sidor"
            icon={<BsPersonCircle className="icon" />}
          />
        </CustomLink>
        <CustomLink to="/staff">
          <ListItem name="Personal" icon={<BsFilePerson className="icon" />} />
        </CustomLink>
        <ListItem name="Webbshop" icon={<IoIosCart className="icon" />} />
      </div>

      <div className="navbar-login">
        <Login setOpenSignUp={setOpenSignUp} updateAfterLogin={updateAfterLogin} />
      </div>
    </motion.div>
  );
}

export default NavBar;

function CustomLink({ to, ...props }) {
  return <Link to={to} {...props}></Link>;
}


