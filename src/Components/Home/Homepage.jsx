import React from 'react'

import style from "./Home.module.css";
import gym from "../../images/voga1.png";
import Footer from '../Footer/Footer';




const Home = () => {
  return (
    <>
      <main>
        
   
      <div className={style.HomePage}>
                <div className={style.LandingPage}>
                    <div className={style.gymImgOne}><img src={gym} alt="gym" /></div>
                    <div className={style.LandingText}><h1>HEJ</h1></div>
                </div>
               
      </div>
      </main>
      <Footer/>
      </>
    
    );
  };
  
  export default Home;