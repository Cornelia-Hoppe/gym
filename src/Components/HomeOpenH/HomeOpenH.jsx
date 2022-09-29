import React from 'react'
import style from "./HomeOpenH.module.css";
// import {  ImArrowRight } from "react-icons/im";
const HomeOpenH = () => {
  return (
    <>
    
        <div className={style.OpenHSection}>
         
            <div className={style.OpenHEnd}>
                <h4 className={style.OpenHEndOne}><b> Öppettider:</b></h4>
                <p className={style.OpenHEndTwo}>Måndag-söndag 07:00-21:00</p>
            </div>
        </div>
    </>    
    );
  };
  
  export default HomeOpenH;