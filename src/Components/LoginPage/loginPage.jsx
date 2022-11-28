import React from "react";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import "./CreateAccount.css";
import Axios from "axios";
import { LoginSchema } from "../../Validation/LoginValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import alertValidation from "../../Validation/red-alert-icon.svg";

const LoginPage = () => {

  let navigate = useNavigate();

  // const [userNameLog, setUserNameLog] = useState("");
  // const [passwordLog, setPasswordLog] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loginStatus2, setLoginStatus2] = useState("");

 

  const loginUser = async(data) => {
    console.log(data)
    // const formLoginData ={
    //   userName: userNameLog,
    //   password: passwordLog,
    // }
    Axios.post("http://localhost:3001/login-page", data).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("ورود کاربر با موفقیت انجام شد.");
        setLoginStatus2(response.data[0].firstName);
        navigate("/profile/2")
      }
    });
    
    const isValid = await LoginSchema.isValid(data);
    console.log(isValid);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  

  return (
    
      <form onSubmit={handleSubmit(loginUser)} className="login-page-area">
        <div className="login-page-title">
          <h3>ورود کاربر</h3>
        </div>
        <div className="input-login-group">
          <input
            type="text"
            name="userNameLog"
            {...register("userNameLog")}
            id="userName"
            className="input-login"
            placeholder="نام کاربری خود را وارد کنید."
            // onChange={(e) => {
            //   setUserNameLog(e.target.value);
            // }}
          />
          
          <label htmlFor="name" className="input-login-label">
            نام کاربری
          </label>
        </div>
        {errors.userNameLog ? (
              <div className="validation-register">
                <img src={alertValidation} alt="" />
                <span>{errors.userNameLog.message}</span>
              </div>
            ) : (
              <></>
            )}
        <div className="input-login-group">
          <input
            type="password"
            name="passwordLog"
            {...register("passwordLog")}
            id="password"
            className="input-login"
            placeholder="رمز عبور خود را وارد کنید."
            // onChange={(e) => {
            //   setPasswordLog(e.target.value);
            // }}
          />
          
          <label htmlFor="name" className="input-login-label">
            رمز عبور
          </label>
        </div>
        {errors.passwordLog ? (
              <div className="validation-register">
                <img src={alertValidation} alt="" />
                <span>{errors.passwordLog.message}</span>
              </div>
            ) : (
              <></>
            )}
        <Link to="#">
          <span>اگر رمز عبور خود را فراموش کرده‌اید،اینجا کلیک کنید.</span>
        </Link>
        <h4 className="login-status">{loginStatus}</h4>
        <h5 className="login-status">{loginStatus2}</h5>
        <div className="login-button-area">
          <button className="login-button" onClick={handleSubmit(loginUser)}>
            ورود
          </button>
          
          <div className="signup-instead">
            <Link to="/Create-account">اگر قبلا ثبت نام نکردید وارد شوید.</Link>
          </div>
        </div>
      </form>
    
  );
};

export default LoginPage;
