import React from 'react'
import style from "./Header.module.css";
import MobileNavigation from "./MobileNavigation";
import Cart from "./Cart"

const Header = () => {
    return (
      <div className={style.HeaderGym}>
                <div className={style.HeadWrap}>
                    <h1>Gymgymson</h1>
                    <Cart />
                    <MobileNavigation />
                </div>
      </div>
    );
  };
  
  export default Header;
  