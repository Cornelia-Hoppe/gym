import React from "react";
import style from "./Home.module.css";
import Footer from "../Footer/Footer";
import LandingHome from "../LandingHome/LandingHome";
import HomeOffer from "../HomeOffer/HomeOffer";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeGallery from "../HomeGallery/HomeGallery";
import Menu from "../Navbar/components/Menu";
import HomePersonal from "../HomePersonal/HomePersonal";

const Home = () => {
  return (
    <>
      <main>
        <Menu />
        <LandingHome />
        <HomeOffer />
        <HomeAbout />
        <HomeGallery />
        <HomePersonal />
      </main>
    </>
  );
};

export default Home;
