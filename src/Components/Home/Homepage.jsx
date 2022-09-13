import React from "react";
import style from "./Home.module.css";
import Footer from "../Footer/Footer";
import LandingHome from "../LandingHome/LandingHome";
import HomeOffer from "../HomeOffer/HomeOffer";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeGallery from "../HomeGallery/HomeGallery";
import Menu from "../Navbar/components/Menu";

const Home = () => {
  return (
    <>
      <main>
        <Menu />
        <LandingHome />
        <HomeOffer />
        <HomeAbout />
        <HomeGallery />
      </main>
    </>
  );
};

export default Home;
