import React from 'react'
import { auth } from "../../firebase-config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
//import LoggedInModal from "./LoggedInModal";
// import { BiLock } from "react-icons/bi";


const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLogedIn, setIsLogedIn] = useState();
const [user, loading, error] = useAuthState(auth);
const [openSignUp, setOpenSignUp] = useState(false);



function register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // clearFields();
        // setIsLogedIn(true);
        navigate("/home");
      })
      .catch((error) => console.error(error));
}

export default register