import { useState } from "react";
import "./css/signUp.css";
import FormInput from "./FormInput";
import { IoIosClose } from "@react-icons/all-files/io/IoIosClose";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function SignUp({ closeSignUp }) {


  




  // START: SPARAR I DATABASEN

  // PASS


  // END: SPARAR I DATABASEN

  return (
    <article className="SignUpWrapper" id="SignUpWrapperId">
      <div className="SignUp">
        <IoIosClose
          className="cancel-button"
          onClick={null}
        />
        <form className="signup-form" onSubmit={null}>
          <h1 className="signup-title">Skapa Konto</h1>
          <button className="signup-button">Skapa Konto</button>
        </form>
      </div>
    </article>
  );
}

export default SignUp;
