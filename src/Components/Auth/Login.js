import "./Login.css";
import "./LoginInput.css";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import LoggedInModal from "./LoggedInModal";
// import { BiLock } from "react-icons/bi";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isLogedIn, setIsLogedIn] = useState();
  const [user, loading, error] = useAuthState(auth);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //LoggedInModal.style.set("block");
        //setIsLogedIn(true);
        //clearFields();

        navigate("/gym"); //dispaly.LoggedInModal(), lägg till denna innan navigate  setIsLogedIn(true)  clearFields()
      })
      .catch((error) => console.error(error));
  };

  const signOutClick = () => {
    auth.signOut();
    navigate("/gym");
    console.log(auth);
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        // clearFields();
        // setIsLogedIn(true);
        navigate("/home");
      })
      .catch((error) => console.error(error));
  };

  // HÄMTAR PROFILER FRÅN DATABASEN START
  // HÄMTAR PROFILER FRÅN DATABASEN END
  // LOGGA UT

  // CLEAR FEILDS

  /* const clearFields = () => {
    document.querySelector("#login-input-1").value = "";
    document.querySelector("#login-input-2").value = "";
  };
*/
  return (
    <div className="Login">
      <form className="login-form">
        <h1 className="login-title">Logga in</h1>
        <div className="LoginInput">
          <label className="login-label">E-mail</label>
          <input
            className="login-input"
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="off"
            type="email"
            name="email"
          />
          <label className="login-label">Password</label>
          <input
            className="login-input"
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="off"
            type="password"
            name="password"
          />
        </div>
      </form>
      <div className="form-buttons">
        <div className="form-buttons-box">
          <button className="login-button" onClick={signIn}>
            Logga in
          </button>
          <button onClick={register} className="register-button login-button">
            Bli medlem
          </button>

          <>
            <p>Välkomen {user?.email}</p>
            <br />
            <button
              onClick={() => auth.signOut()}
              className="register-button login-button"
            >
              Logga ut
            </button>
          </>
        </div>
        <p className="login-forgot-password"></p>
      </div>
    </div>
  );
}

export default Login;

/*

    useEffect(() => {
        if (!localStorage.getItem('user')) setIsLogedIn(false)
        else setIsLogedIn(true)
    }, [])

    const logOut = () => {
        window.confirm("Logga ut?")
        localStorage.removeItem('user')
        updateAfterLogin()
        setIsLogedIn(false)
    }
    




import "../css/Login.css";
import { useState, useEffect } from "react";
import LoginInput from "./LoginInput";
import { db } from '../../../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import UpdateLocalStorage from "../../../functions/UpdateLocalStorage";

function Login({ setOpenSignUp, updateAfterLogin, darkText }) {

// HÄMTAR PROFILER FRÅN DATABASEN START
    const profilerCollectionRef = collection(db, "profiler")
    const [profiler, setProfiler] = useState([])

    useEffect(() => {

        const getProfiler = async () => {
          const data = await getDocs(profilerCollectionRef)
          setProfiler(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
    
        getProfiler()
      }, [])
// HÄMTAR PROFILER FRÅN DATABASEN END

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Lösenord",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

    let userProfile = []

    const handleSubmit = (e) => {
        e.preventDefault();

        const profile = profiler.find((item) => {
            return item.email === values.email
        })

        if (!profile) {
            alert('Wrong email')
        } else {
            userProfile = profile
            checkPassword()
        }
    };

    const checkPassword = () => {
        if (userProfile.password == values.password) {
            alert('inloggad!')
            window.localStorage.setItem('user', JSON.stringify(userProfile))
            setIsLogedIn(true)
            updateAfterLogin()
            clearFields()

        } else {
            alert('fel lösenord')
        }
    }

// LOGGA UT 
    const [isLogedIn, setIsLogedIn] = useState()
    const STYLE_NONE = {display:'none'}
    const STYLE_WIDTH = {width:'100%'}
    const STYLE_DARK = {color:'black'}

    useEffect(() => {
        if (!localStorage.getItem('user')) setIsLogedIn(false)
        else setIsLogedIn(true)
    }, [])

    const logOut = () => {
        window.confirm("Logga ut?")
        localStorage.removeItem('user')
        updateAfterLogin()
        setIsLogedIn(false)
    }
    
// CLEAR FEILDS

    const clearFields = () => {
        document.querySelector('#login-input-1').value=''
        document.querySelector('#login-input-2').value=''
    }

    return (
        <div className="Login">
            <form className="login-form">
                <h1 className="login-title" style={darkText}>{ isLogedIn ? '' : 'Logga in'}</h1>
                {inputs.map((input, index) => (
                    <LoginInput
                        id={index}
                        key={input.id}
                        {...input}
                        value={values[inputs.name]}
                        onChange={onChange}
                        style={isLogedIn ? STYLE_NONE : null}
                    />
                ))}
            </form>
            <div className="form-buttons">
                <div className="form-buttons-box">
                    <button className="login-button" onClick={isLogedIn ? logOut : handleSubmit} style={isLogedIn ? STYLE_WIDTH : null} >{isLogedIn ? 'Logga ut' : 'Logga in'}</button>
                    <button
                    style={ isLogedIn ? STYLE_NONE : null}
                        onClick={() => {
                            setOpenSignUp(true);
                        }}
                        className="register-button login-button"
                    >
                    Bli medlem
                    </button>
                </div>
                <p className="login-forgot-password" style={darkText}>{ isLogedIn ? '' : 'Glömt lösenord?'}</p>
            </div>
        </div>
    );
}

export default Login;
*/
