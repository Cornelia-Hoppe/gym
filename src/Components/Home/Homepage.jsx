import React from 'react'
import style from "./Home.module.css";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import LandingHome from '../LandingHome/LandingHome';


const Home = () => {
  return (

    
    <>
      <main>
        <div className={style.HomePage}>
            <Header />
            <LandingHome />
               
        </div>
      </main>
      <Footer/>
      </>
    
    );
  };
  
  export default Home;