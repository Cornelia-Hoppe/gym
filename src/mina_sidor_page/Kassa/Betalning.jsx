import React from "react";
import useModal from "./AddForm";
import Modal from "./Modal";
import style from "./BetalningStyle.module.css";
import Memberships from "../Memberships";
 import img from "./imgs/swish.png";
 import klarna from  "./imgs/klarna.png"
 import visa from  "./imgs/visa.png"


export default function App() {

  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();

  return (
    <>
      <div className="App">
  
        <Memberships onclick={toggleRegistrationForm} />

       

        <Modal
          isShowing={isRegistrationFormShowed}
          hide={toggleRegistrationForm}
          title=""
              >
         
        
                 <div className={style.paymentContainer}>
            <h2 className={style.h2Payment}> Betalningssätt</h2>
            {/* <h3 className={style.h3Payment}>3 månader: Kostnad 1300:-</h3> */}
            <div className={style.alternative}><h3 >Faktura</h3>
              <div className={style.alternativeImg}> <img src={klarna} /> </div>
            </div>
            <div className={style.alternative}><h3>Kort</h3>
              <div  className={style.alternativeImg}>  <img src={visa} /></div>
            </div>
            
            <div className={style.alternative}><h3>Swish</h3>
                      <div className={style.alternativeImg}  > <img src={img} /></div>
            </div>
            </div>
        </Modal>
      </div>

    </>
  );
}

