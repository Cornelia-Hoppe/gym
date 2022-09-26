import { useState } from "react";

import FormInput from "./FormInput";
import SimpleModal from "../../simpleModal/SimpleModal";
import "../css/signUp.css";
//Icons
import { IoIosClose } from "react-icons/io";
import { db } from '../../../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function SignUp({ closeSignup }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Ange email",
      errorMessage: "Ange en giltig email adress!",
      lable: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Ange lösenord",
      errorMessage:
        "Lösenordet ska vara minst 8 tecken långt, innehålla minst en stor bokstav och siffra!",
      lable: "Lösenord",
      pattern: "^(?=.*?[A-Ö])(?=.*?[a-ö])(?=.*?[0-9]).{8,}",
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Upprepa lösenord",
      errorMessage: "Lösenordet matchar inte!",
      lable: "Upprepa lösenord",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "firstName",
      type: "text",
      placeholder: "Förnamn",
      lable: "Förnamn",
    },
    {
      id: 5,
      name: "lastName",
      type: "text",
      placeholder: "Efternamn",
      lable: "Efternamn",
    },
    {
      id: 6,
      name: "phoneNumber",
      type: "number",
      placeholder: "Telefonnummer",
      lable: "Telefonnummer",
    },
  ];

  const emailAndPassword = inputs.slice(0, 3);
  const personalInformation = inputs.slice(3, 9);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(values); //Console-logar ut värdena som skrivits in i fälten vid submit (Email och lösenord)
    }

  // const createProfil = async () => {
  //   await addDoc(profilerCollectionRef, {
  //     name: values.firstName,
  //     lastName: values.lastName,
  //     email: values.email,
  //     phoneNumber: values.phoneNumber,
  //     password: values.password,
  //   });
  // };
  // LÄGGER TILL ANVÄNDAREN I DATABASEN - END
  return (
    <div className="SignUp">
      <IoIosClose
        className="cancel-button"
        onClick={() => closeSignup(false)}
      />
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="signup-title">Skapa Konto</h1>
        {personalInformation.map((input) => (
          <FormInput
            className="signup-first-inputs"
            key={input.id}
            {...input}
            value={values[inputs.name]}
            onChange={onChange}
          />
        ))}
        {emailAndPassword.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[inputs.name]}
            onChange={onChange}
          />
        ))}
        <button className="signup-button">Skapa Konto</button>
      </form>
      <SimpleModal
        modalText={`Välkommen till klubben ${values.firstName}!`}
        // isOpen={modalIsOpen}
      />
    </div>
  );
}

export default SignUp;
