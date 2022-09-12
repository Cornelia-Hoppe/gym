import React from 'react'
import style from "./HomeOffer.module.css";



const HomeOffer = () => {
  return (
    <>
        <div className={style.OfferSection}>
            <div className={style.OfferInfo}> 
              <h3>Medlemskap & passkort</h3>
              <p>Bli medlem och få fri tillgång till <br></br> gymmet och våra pass! <br></br><br></br>Eller köp ett enskilt passkort!</p>
            </div>
            <button className={style.OfferOne} role="button"><p className={style.rowOne}>3 månader</p> <br></br> <p className={style.rowTwo}> 1300:- </p> </button>
            <button className={style.OfferTwo} role="button"><p className={style.rowOne}>6 månader</p> <br></br> <p className={style.rowTwo}> 2100:- </p> </button>
            <button className={style.OfferThree} role="button"><p className={style.rowOne}>12 månader</p> <br></br> <p className={style.rowTwo}> 3600:- </p> </button>
            <button className={style.OfferFour} role="button"> <p className={style.rowOne}>Passkort</p> <br></br> <p className={style.rowTwo}> 150:- </p></button>
            <button className={style.buttonMember} role="button"> <p className={style.rowMember}>Bli medlem</p> </button>
        </div>
      </>
    
    );
  };
  
  export default HomeOffer;