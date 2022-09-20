import React from "react";
import useModal from "./AddForm";
import Modal from "./Modal";
import "./formStyle.css";

/* Form page*/ 

export default function App() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();

  return (
    <>
      <div className="App">
       
        <button className="modal-toggle" onClick={toggleRegistrationForm}>
          Kassa
        </button>

        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="kassa"
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Förnamn" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Efternamn" />
            </div>
           
          </form>
        </Modal>

        {/*Personuppgifter */ }

        <Modal
          isShowing={isRegistrationFormShowed}
          hide={toggleRegistrationForm}
          title="Kassa"
              >
               <h5>Personuppgifter</h5>
          <form>
                      <div className="form-group">
                      Förnamn
              <input type="text" placeholder="Förnamn" />
            </div>
                      <div className="form-group">
                      Efternamn
              <input type="text" placeholder="Efternamn" />
            </div>
                      <div className="form-group">
                      Telefonummer
              <input type="text" placeholder="Telefonummer" />
            </div>
                      <div className="form-group">
                          Adress
                          <input type="text"  placeholder="Ex. Gatavägen 1" />
                          <input type="text"  placeholder="Postnummer" />
                          <input type="text" placeholder="Stad" />
            </div>
          </form>
          <hr/>
                 <div className="">
                  <h2> Betalningssätt</h2>
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
