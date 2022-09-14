import React from 'react';
import { useState } from "react";
import ListItem from './ListItem';
import Login from './Login';
import '../css/Navbar.css';
import SignUp from './SignUp';
import {motion} from "framer-motion"
//Icons
import { IoIosClose, IoMdHome, IoIosCart } from "react-icons/io";
import { BsPersonCircle, BsFilePerson } from "react-icons/bs";
import { TbYoga } from "react-icons/tb";
//installer följande:
//npm install react-icons --save
// npm install -S react-router-dom
//nmp install framer-motion

function NavBar( {closeNavbar} ) {

  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <motion.div 
    initial = {{
      x: 100,
      opacity: 0
    }}
    animate={{
      x: 0,
      opacity: 1
    }}
    className="Navbar">
        {openSignUp && <SignUp closeSignup={ setOpenSignUp }/>}
        <div className='navbar-header'>
            <IoIosClose className='exit-button' onClick={() => closeNavbar(false)}/>
        </div>
        <div className='navbar-list'>
            <ListItem name="Startsida" icon={<IoMdHome className="icon"/>} />
            <ListItem name="Boka pass" icon={<TbYoga className="icon"/>} />
            <ListItem name="Mina sidor" icon={<BsPersonCircle className="icon"/>} />
            <ListItem name="Personal" icon={<BsFilePerson className="icon"/>} />
            <ListItem name="Webbshop" icon={<IoIosCart className="icon"/>} />
        </div>
        <div className='navbar-login'>
            <Login setOpenSignUp={setOpenSignUp}/>
        </div>
    </motion.div>
  );
}

export default NavBar;