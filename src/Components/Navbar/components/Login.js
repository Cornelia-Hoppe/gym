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
