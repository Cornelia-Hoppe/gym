import React from "react";
import style from "./LandingHome.module.css";
import gymDesktop from "../../images/desktop-img1.jpg";

const LandingHome = () => {
  return (
    <>
      <main>
        <div className={style.LandingPage}>
          <div className={style.gymImgDesktop}>
            <img src={gymDesktop} rel="preload" fetchpriority="high" alt="gym-desktop" />
          </div>
          <button className={style.landingButton} role="button">
            <h2>Bli medlem</h2>
            <h3>från 300:-/månad</h3>
          </button>
        </div>
      </main>
    </>
  );
};

export default LandingHome;
