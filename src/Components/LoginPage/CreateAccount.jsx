import React, { useState } from "react";
import imgArea from "./svg/account.svg";
import { Link } from "react-router-dom";
import "./CreateAccount.css";
import Footer from "../Footer/Footer";
import Axios from "axios";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [regStatus, setRegStatus] = useState("");

  // function signUp() {
  //   let item = { firstName, lastName, userName, password, repPassword };
  //   console.warn(item);
  // }

  const [userCreated, setUserCreated] = useState("");

  const adduser = () => {
    Axios.post("http://localhost:3001/create-account", {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
      repPassword: repPassword,
    }).then(() => {
      console.log("success");
      setRegStatus("ثبت نام شما با موفقیت انجام شد");
    });
  };

  return (
    <div>
      <div className="CreateAccount-box">
        <div className="UsernamePass">
          <div className="col-lg-8">
            <div style={{ marginBottom: "30px" }}>
              <h3>ثبت نام</h3>
            </div>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <div className="input-group">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="firstName"
                  required
                  className="input"
                />
                <label htmlFor="name" className="input-label">
                  نام
                </label>
              </div>
              <div style={{ marginLeft: "auto" }} className="input-group">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="lastName"
                  required
                  className="input"
                />
                <label htmlFor="name" className="input-label">
                  نام خانوادگی
                </label>
              </div>
            </div>

            <div className="input-group">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="userName"
                required
                className="input"
                placeholder="email.com@"
              />
              <label htmlFor="name" className="input-label">
                نام کاربری
              </label>
            </div>
            <span style={{ fontSize: "12px" }}>
              می‌توانید از حروف و اعداد استفاده کنید.
            </span>

            <div style={{ display: "flex", marginTop: "60px" }}>
              <div className="input-group">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  className="input"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
                <label htmlFor="name" className="input-label">
                  رمز عبور
                </label>
              </div>
              <div style={{ marginLeft: "auto" }} className="input-group">
                <input
                  onChange={(e) => setRepPassword(e.target.value)}
                  type="password"
                  id="repPassword"
                  required
                  className="input"
                />
                <label htmlFor="name" className="input-label">
                  تکرار رمز عبور
                </label>
              </div>
            </div>
            <span style={{ fontSize: "12px" }}>
              کلمه عبور باید حداقل ۸ کاراکتر باشد.از حروف٬اعدادو نماد ها استفاده
              کنید.
            </span>
          </div>
          <div className="col-lg-4 imgArea">
            <img src={imgArea} alt="" />
          </div>
        </div>

        <div className="signup-area">
          <div className="signup-button">
            <button onClick={adduser} className="signup">
              ثبت نام
            </button>
            <p>{regStatus}</p>
          </div>
          <div>
            <Link className="signin-instead" to="/login-page">
              اگر قبلا ثبت نام کردید وارد شوید.
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateAccount;
