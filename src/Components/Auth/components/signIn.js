
import React from 'react'
import { auth } from "../../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLogedIn, setIsLogedIn] = useState();
const [user, loading, error] = useAuthState(auth);
const [openSignUp, setOpenSignUp] = useState(false);

function signIn() {
  signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      setLocalStorage();
      //LoggedInModal.style.set("block");
      clearFields();

      navigate("/gym"); //dispaly.LoggedInModal(), lägg till denna innan navigate  setIsLogedIn(true)  clearFields()
    })
    .catch((error) => console.error(error));
}

export default signIn;

/*  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        setLocalStorage();
        //LoggedInModal.style.set("block");
        clearFields();

        navigate("/gym"); //dispaly.LoggedInModal(), lägg till denna innan navigate  setIsLogedIn(true)  clearFields()
      })
      .catch((error) => console.error(error));
  };
  */
