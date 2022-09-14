import "../css/Login.css";
import { useState, useEffect } from "react";
import LoginInput from "./LoginInput";
import { db } from '../../../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function Login({ setOpenSignUp }) {

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

    const [userProfile, setUserProfile] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        const profile = profiler.find((item) => {
            return item.email === values.email
        })

        if (!profile) {
            alert('Wrong email')
        } else {
            setUserProfile(profile)
            checkPassword()
        }
    };

    const checkPassword = () => {
        if (userProfile.password == values.password) {
            alert('inloggad!')
            window.localStorage.setItem('user', JSON.stringify(userProfile))
        } else {
            alert('fel lösenord')
        }
    }


    
    return (
        <div className="Login">
            <form className="login-form">
                <h1 className="login-title">Logga in</h1>
                {inputs.map((input) => (
                    <LoginInput
                        key={input.id}
                        {...input}
                        value={values[inputs.name]}
                        onChange={onChange}
                    />
                ))}
            </form>
            <div className="form-buttons">
                <button className="login-button" onClick={handleSubmit}>Logga in</button>
                <button
                    onClick={() => {
                        setOpenSignUp(true);
                    }}
                    className="register-button login-button"
                >
                    Bli medlem
                </button>
            </div>
            <p className="login-forgot-password">Glömt lösenord?</p>
        </div>
    );
}

export default Login;
