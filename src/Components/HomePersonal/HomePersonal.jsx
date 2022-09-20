import React from "react";
import style from "./HomePersonal.module.css";
import personal1 from "../../images/personal1.jpg";
import personal2 from "../../images/personal2.jpg";
import personal3 from "../../images/personal3.jpg";
import personal4 from "../../images/personal4.jpg";
import { Link } from "react-router-dom";

const HomePersonal = () => {
  return (
    <>
      <div className={style.PersonalSection}>
        <div className={style.HeaderPersonal}>
          <h3>Personal</h3>
        </div>
        <div className={style.PersonalButtons}>
            <button className={style.personal1}><p>Ledning</p></button>
            <button className={style.personal2}><p>Tränare</p></button>
            <button className={style.personal3}><p>Reception</p></button>
            <button className={style.personal4}><p>Instruktörer</p></button>
        </div>
      </div>
    </>
  );
};

export default HomePersonal;

