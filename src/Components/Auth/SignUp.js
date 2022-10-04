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
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const register = () => {
    if (password1 === password2) {
      setPassword(password1);

      createUserWithEmailAndPassword(auth, email, password).then((auth) => {
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
    <article className="SignUpWrapper" id="SignUpWrapperId">
      <div className="SignUp">
        <GrClose
          className="cancel-button"
          onClick={() => {
            closeSignUp(false);
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
                    onChange={(event) => setPassword1(event.target.value)}
                    autoComplete="off"
                    type="password"
                    name="password"
                  />

                  <label className="login-label">Confirm Password</label>
                  <input
                    className="login-input"
                    id={"login-input-2"}
                    onChange={(event) => setPassword2(event.target.value)}
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
