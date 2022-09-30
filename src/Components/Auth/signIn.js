/*

import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

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
