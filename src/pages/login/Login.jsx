import React, { useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handlClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">OTG Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on OTG Social.
          </span>
        </div>
        <form className="loginRight" onSubmit={handlClick}>
          <div className="loginBox">
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot your password?</span>
            <button className="loginRegisterButton">
              Create a new account.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
