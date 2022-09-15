import React from 'react'
import style from "./HomePersonal.module.css";
import personal1 from "../../images/personal1.jpg"
import personal2 from "../../images/personal2.jpg"
import personal3 from "../../images/personal3.jpg"
import personal4 from "../../images/personal4.jpg"


const HomePersonal = () => {
  return (
    <>
    <div className={style.PersonalSection}>
        <div className={style.HeaderPersonal}> 
              <h3>Personal</h3>
        </div>
        <div className={style.PersonalButtons}>
            <button className={style.persona1} style={{ backgroundImage: `url(${personal1})` }}><p>Ledning</p></button>
            <button className={style.persona2} style={{ backgroundImage: `url(${personal2})` }}><p>Personliga tränare</p></button>
            <button className={style.persona3} style={{ backgroundImage: `url(${personal3})` }}><p>Reception</p></button>
            <button className={style.persona4} style={{ backgroundImage: `url(${personal4})` }}><p>Instruktörer</p></button>
        </div>
    </div>
    </>
    
    );
  };
  
  export default HomePersonal;