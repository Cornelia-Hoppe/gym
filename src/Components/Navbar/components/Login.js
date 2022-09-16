import "../css/Login.css";
import { useState } from "react";
import LoginInput from "./LoginInput";

function Login({ setOpenSignUp }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values); //Console-logar ut värdena som skrivits in i fälten vid submit (Email och lösenord)
    };
    
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
