import { useState } from "react";
import "./css/signUp.css";
import FormInput from "./FormInput";
import { IoIosClose } from "react-icons/io";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

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
      type: "numbers",
      placeholder: "Telefonnummer",
      lable: "Telefonnummer",
    },
    {
      id: 7,
      name: "adress",
      type: "text",
      placeholder: "Ex. Gatavägen 1",
      lable: "Adress",
    },
    {
      id: 8,
      name: "postNumber",
      type: "numbers",
      placeholder: "Postnummer",
    },
    {
      id: 9,
      name: "city",
      type: "text",
      placeholder: "Stad",
    },
  ];

  const firstThree = inputs.slice(0, 3);
  const rest = inputs.slice(3, 9);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values); //Console-logar ut värdena som skrivits in i fälten vid submit (Email och lösenord)
    createProfil();
  };

  // START: SPARAR I DATABASEN

  // PASS
  const createProfil = async () => {
    const passCollectionRef = collection(db, "profiler");

    await addDoc(passCollectionRef, {
      email: values.email,
      password: values.password,
    });
    alert("Sparat!");

    // clearFields()
  };

  // END: SPARAR I DATABASEN

  return (
    <article className="SignUpWrapper" id="SignUpWrapperId">
      <div className="SignUp">
        <IoIosClose
          className="cancel-button"
          onClick={() => closeSignup(false)}
        />
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1 className="signup-title">Skapa Konto</h1>
          {firstThree.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[inputs.name]}
              onChange={onChange}
            />
          ))}
          <button className="signup-button">Skapa Konto</button>
        </form>
      </div>
    </article>
  );
}

export default SignUp;
