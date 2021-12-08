import React, { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              required
              type="text"
              ref={username}
              placeholder="Username"
              className="loginInput"
            />
            <input
              required
              type="email"
              ref={email}
              placeholder="Email"
              className="loginInput"
            />
            <input
              required
              type="password"
              ref={password}
              placeholder="Password"
              className="loginInput"
              minLength="6"
            />
            <input
              required
              type="password"
              ref={confirmPassword}
              placeholder="Password again"
              className="loginInput"
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button className="loginRegisterButton">
              Log into your account.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
