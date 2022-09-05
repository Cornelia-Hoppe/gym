import React from 'react'
import style from "./Home.module.css";
import gym from "../../images/voga1.png";

const Home = () => {
    return (
      <div className={style.HomePage}>
                <div className={style.LandingPage}>
                    <div className={style.gymImgOne}><img src={gym} alt="gym" /></div>
                    <div className={style.LandingText}><h1>HEJ</h1></div>
                </div>
    
      </div>
    );
  };
  
  export default Home;