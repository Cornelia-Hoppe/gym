import "./css/signUp.css";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp({ closeSignUp }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const register = () => {
    if (password === passwordConfirm) {
      createUserWithEmailAndPassword(auth, email, password).then((auth) => {
        setPassword("");
        setPasswordConfirm("");
        navigate("/gym");
      });
    } else {
      alert("lösenorden matchar ej");
    }
  };

  const [userAuth, loading, error] = useAuthState(auth);

  const [user, setUser] = useState(
    userAuth ? JSON.parse(localStorage.getItem("user")) : ""
  );

  // clearFields()

  // END: SPARAR I DATABASEN

  return (
    <article className="SignUpWrapper">
      <div className="SignUp">
        <GrClose
          className="cancel-button"
          onClick={() => {
            closeSignUp(false);
            document.body.style.overflow = "visible";
          }}
        />

        <>
          <section className="profile-wrapper">
            <article>
              <form className="login-form">
                <div className="LoginInput">
                  <label className="login-label">E-mail</label>
                  <input
                    className="login-input"
                    id={"login-input-1"}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="off"
                    type="email"
                    name="email"
                  />
                  <label className="login-label">Password</label>
                  <input
                    className="login-input"
                    id={"login-input-2"}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="off"
                    type="password"
                    name="password"
                  />

                  <label className="login-label">Confirm Password</label>
                  <input
                    className="login-input"
                    id={"login-input-3"}
                    onChange={(event) => setPasswordConfirm(event.target.value)}
                    autoComplete="off"
                    type="password"
                    name="password"
                  />
                </div>
              </form>

              <button
                onClick={register}
                className="register-button login-button"
              >
                Bli medlem
              </button>
            </article>
          </section>
        </>
      </div>
    </article>
  );
}

export default SignUp;

/*

    <>
      {openSignUp && <SignUp closeSignUp={setOpenSignUp} />}
      <div className="Login">
        <h1 className="login-title">
          {user ? `Välkommen ${user.email}` : "Logga in?"}
        </h1>
        <form style={user ? STYLE_LOGGED_IN_NONE : null} className="login-form">
          <div className="LoginInput">
            <label className="login-label">E-mail</label>
            <input
              className="login-input"
              id={"login-input-1"}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
              type="email"
              name="email"
            />
            <label className="login-label">Password</label>
            <input
              className="login-input"
              id={"login-input-2"}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="off"
              type="password"
              name="password"
            />
          </div>
        </form>
        <div className="form-buttons">
          <div className="form-buttons-box">
            <button
              style={user ? STYLE_LOGGED_IN_NONE : null}
              className="login-button"
              onClick={signIn}
            >
              Logga in
            </button>
            <button
              style={user ? STYLE_LOGGED_IN_NONE : null}
              onClick={() => {
                setOpenSignUp(true);
              }}
              className="register-button login-button"
            >
              Bli medlem
            </button>

            <>
              <br />
              <button
                style={user ? null : STYLE_NOT_LOGGED_IN_FLEX}
                onClick={signOutClick}
                className="register-button login-button"
              >
                Logga ut
              </button>
            </>
          </div>
          <p className="login-forgot-password"></p>
        </div>
      </div>
    </>

 */
