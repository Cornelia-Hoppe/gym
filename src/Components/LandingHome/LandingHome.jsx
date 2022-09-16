import React from "react";
import style from "./LandingHome.module.css";
import gymMobile from "../../images/landing-mobile.jpg";
import gymDesktop from "../../images/landing-desktop.jpg";

const LandingHome = () => {
  return (
    <>
      <main>
        <div className={style.LandingPage}>
          <div className={style.gymImgOne}>
            <img src={gymMobile} alt="gym-mobile" />
          </div>

          <div className={style.gymImgDesktop}>
            <img src={gymDesktop} alt="gym-desktop" />
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
