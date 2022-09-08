import React from 'react'
import style from "./LandingHome.module.css";
import gym from "../../images/home.jpg";




const LandingHome = () => {
  return (
    <>
      <main>
            <div className={style.LandingPage}>
                <div className={style.gymImgOne}><img src={gym} alt="gym" /></div>
                <button class={style.landingButton} role="button"><p>Bli medlem</p> <br></br> från 300:-/månad</button>
            </div>
      </main>
    </>
    
    );
  };
  
  export default LandingHome;