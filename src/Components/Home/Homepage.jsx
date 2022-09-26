import React from "react";
import style from "./Home.module.css";
import Footer from "../Footer/Footer";
import LandingHome from "../LandingHome/LandingHome";
import HomeOffer from "../HomeOffer/HomeOffer";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeGallery from "../HomeGallery/HomeGallery";
import Menu from "../Navbar/components/Menu";
import HomePersonal from "../HomePersonal/HomePersonal";
import Arrow from "../ScrollArrow/Arrow"
import HomeOpenH from "../HomeOpenH/HomeOpenH";

const Homepage = () => {
  return (
    <>
      <main>
        <Arrow />
        <Menu />
        <LandingHome />
        <HomeOpenH />
        <HomeAbout />
        <HomeGallery />
        <HomePersonal />
      </main>
    </>
  );
};

export default Homepage;


