import React from "react";
import useModal from "./AddForm";
import Modal from "./Modal";
import "./BetalningStyle.css";



export default function App() {

  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();

  return (
    <>
      <div className="App">
       
        <button className="modal-toggle" onClick={toggleRegistrationForm}>
        Betalningssätt
        </button>

       

        <Modal
          isShowing={isRegistrationFormShowed}
          hide={toggleRegistrationForm}
          title=""
              >
         
        
                 <div className="">
            <h2> Betalningssätt</h2>
            <h2 className="m-h2">3 månader: Kostnad 1300:-</h2>
            <div className="kassa">
              <button className="klarna-Logo" ><h3 >Faktura</h3></button>
            </div>
            <div className="kassa1">
              <button className="visa" ><h3>Kort</h3></button>
            </div>
            
            <div className="kassa2">
                      <button className="swish" ><h3>Swish</h3></button>
            </div>
            </div>
        </Modal>
      </div>

    </>
  );
}
