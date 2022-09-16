import React from 'react'
import style from "./HomeOffer.module.css";



const HomeOffer = () => {
  return (
    <>
        <div className={style.OfferSection}>
              <h3>Medlemskap & passkort</h3>
              <div className={style.offerContent}>
            <div className={style.OfferInfo}> 
              <p>Bli medlem och få fri<br></br> tillgång till  gymmet <br></br> och våra pass! <br></br><br></br>Eller köp ett enskilt  <br></br>passkort!</p>
              <button className={style.buttonMemberDesktop} role="button"> <p className={style.rowMember}>Bli medlem</p> </button>
          </div>
            <div className={style.OfferCards}>
            <button className={style.OfferOne} role="button"><p className={style.rowOne}>3 månader</p>  <p className={style.rowTwo}> 1300:- </p> </button>
            <button className={style.OfferTwo} role="button"><p className={style.rowOne}>6 månader</p>  <p className={style.rowTwo}> 2100:- </p> </button>
            <button className={style.OfferThree} role="button"><p className={style.rowOne}>12 månader</p> <p className={style.rowTwo}> 3600:- </p> </button>
            <button className={style.OfferFour} role="button"> <p className={style.rowOne}>Passkort</p> <p className={style.rowTwo}> 150:- </p></button>
    <button className={style.buttonMember} role="button"> <p className={style.rowMember}>Bli medlem</p> </button>

       </div>       
    
       </div>
        </div>
      </>
    
    );
  };
  
  export default HomeOffer;