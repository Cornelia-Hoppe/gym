import React from 'react'
import style from "./Home.module.css";

import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import LandingHome from '../LandingHome/LandingHome';
import HomeOffer from '../HomeOffer/HomeOffer';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeGallery from '../HomeGallery/HomeGallery';




const Home = () => {
  return (

    
    <>
      <main>
        <div className={style.HomePage}>
            <Header />
            <LandingHome />
            <HomeOffer />
            <HomeAbout />
          <HomeGallery />
                  
        </div>
      </main>

      </>
    
    );
  };
  
  export default Home;