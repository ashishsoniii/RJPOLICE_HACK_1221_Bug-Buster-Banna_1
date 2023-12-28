import React, { useState } from "react";
import "./LoginPage.css";
import { loginUser, getLoginStatus } from "./services/authService";
import { useDispatch } from "react-redux";
import { SET_LOGIN } from "./redux/features/auth/authSlice";

const AnimatedLoginForm = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState(false);
  const [err, setErr] = useState("");

  const login = async (e) => {
    e.preventDefault();
    if (!userName || !password) {
    }

    const input = {
      userName,
      password,
    };
    try {
      const data = await loginUser(input);
      if (!data.response) {
        const status = await getLoginStatus();
        if (status === true) {
          dispatch(SET_LOGIN(true));
          console.log(data);
        }
      } else {
        setErr(data.response.data.message);
      }
    } catch (error) {
      console.log("Failed to establish an efficient connection to the server!");
    }
  };

  return (
    <div className="LoginArea">
      <div className="center ">
        <div className="login-logo">
          <div className="main-logo login-logo">
            <img
              className="big-logo "
              src="https://www.police.rajasthan.gov.in/old/hackathon/assetsNew/Logo.png"
              alt="logo"
            />
          </div>
          <h1>राजस्थान पुलिस</h1>
        </div>

        <form onSubmit={login} method="post">
          <div className="txt_field">
            <input
              id="username"
              onChange={(event) => setUserName(event.target.value)}
              type="text"
              required
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
        <div style={{color:"red"}}>{err}</div>

          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="/#/">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnimatedLoginForm;
