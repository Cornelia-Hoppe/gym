import React from 'react'
import {auth} from '../../../firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLogedIn, setIsLogedIn] = useState();
const [user, loading, error] = useAuthState(auth);
const [openSignUp, setOpenSignUp] = useState(false);


function signOut() {
    auth.signOut();
    localStorage.removeItem("user");
    navigate("/gym");
}

export default signOut