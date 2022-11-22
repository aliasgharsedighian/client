import React from "react";
import { useState } from "react";
// import {useSelector , useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// import { login } from '../../Redux/Actions';
// import { logout } from '../../Redux/Actions';
import "./CreateAccount.css";
import Axios from "axios";

const LoginPage = () => {
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('You clicked submit.');
  // }

  const [userNameLog, setUserNameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loginStatus2, setLoginStatus2] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login-page", {
      userName: userNameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("ورود کاربر با موفقیت انجام شد.");
        setLoginStatus2(response.data[0].firstName);
      }
    });
  };

  return (
    <div>
      <div className="login-page-area">
        <div className="login-page-title">
          <h3>ورود کاربر</h3>
        </div>
        <div className="input-login-group">
          <input
            type="text"
            id="userName"
            required
            className="input-login"
            placeholder="نام کاربری خود را وارد کنید."
            onChange={(e) => {
              setUserNameLog(e.target.value);
            }}
          />
          <label htmlFor="name" className="input-login-label">
            نام کاربری
          </label>
        </div>
        <div className="input-login-group">
          <input
            type="password"
            id="password"
            className="input-login"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required
            placeholder="رمز عبور خود را وارد کنید."
            onChange={(e) => {
              setPasswordLog(e.target.value);
            }}
          />
          <label htmlFor="name" className="input-login-label">
            رمز عبور
          </label>
        </div>
        <Link to="#">
          <span>اگر رمز عبور خود را فراموش کرده‌اید،اینجا کلیک کنید.</span>
        </Link>
        <h4 className="login-status">{loginStatus}</h4>
        <h5 className="login-status">{loginStatus2}</h5>
        <div className="login-button-area">
          <button className="login-button" onClick={login}>
            ورود
          </button>
          <div className="signup-instead">
            <Link to="/Create-account">اگر قبلا ثبت نام نکردید وارد شوید.</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
