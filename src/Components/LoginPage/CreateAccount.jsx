import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";
import Axios from "axios";
import { CreateAccountSchema } from "../../Validation/CreateAccountValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import alertValidation from "../../Validation/red-alert-icon.svg";

const CreateAccount = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [userName, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [repPassword, setRepPassword] = useState("");
  const [regStatus, setRegStatus] = useState("");

  const adduser = async (data) => {
    // const item = {firstName, lastName, userName, password, repPassword}
    // console.log(item)
    console.log(data)
    // const formData = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   userName: userName,
    //   password: password,
    //   repPassword: repPassword,
    // };
    Axios.post("http://localhost:3001/create-account", data).then(() => {
      console.log("success");
      setRegStatus("ثبت نام شما با موفقیت انجام شد");
    });

    const isValid = await CreateAccountSchema.isValid(data);
    console.log(isValid);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateAccountSchema),
  });

  return (

      <form onSubmit={handleSubmit(adduser)} className="CreateAccount-box">
        <div className="UsernamePass">
          <div className="register-area1">
            <div className="register-page-title">
              <h3>ثبت نام</h3>
            </div>
            <div className="firstname-lastname-container">
              <div className="input-group">
                <input
                  // onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="firstName"
                  required
                  className="input"
                  name="firstName"
                  {...register("firstName")}
                />
                <label htmlFor="name" className="input-label">
                  نام
                </label>
              </div>
              <div className="input-group">
                <input
                  // onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="lastName"
                  required
                  className="input"
                  name="lastName"
                  {...register("lastName")}
                />
                <label htmlFor="name" className="input-label">
                  نام خانوادگی
                </label>
              </div>
            </div>
            {errors.firstName ? (
              <div className="validation-register">
                <img src={alertValidation} alt="" />
                <span>{errors.firstName.message}</span>
              </div>
            ) : (
              <></>
            )}
            {errors.lastName ? (
              <div className="validation-register">
                <img src={alertValidation} alt="" />
                <span>{errors.lastName.message}</span>
              </div>
            ) : (
              <></>
            )}

            <div className="username-container">
              <div className="input-group">
                <input
                  // onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  id="userName"
                  required
                  className="input"
                  placeholder="email.com@"
                  name="userName"
                  {...register("userName")}
                />
                <label htmlFor="name" className="input-label">
                  نام کاربری
                </label>
              </div>
              <span>
              می‌توانید از حروف و اعداد استفاده کنید.
            </span>
            {errors.userName ? (
              <div className="validation-register">
                <img src={alertValidation} alt="" />
                <span>{errors.userName.message}</span>
              </div>
            ) : (
              <></>
            )}
            </div>

            <div className="password-container">
              <div className="input-group">
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  className="input"
                  name="password"
                  {...register("password")}
                />
                <label htmlFor="name" className="input-label">
                  رمز عبور
                </label>
              </div>
              <div className="input-group">
                <input
                  // onChange={(e) => setRepPassword(e.target.value)}
                  type="password"
                  id="repPassword"
                  className="input"
                  name="repPassword"
                  {...register("repPassword")}
                />
                <label htmlFor="name" className="input-label">
                  تکرار رمز عبور
                </label>
              </div>

              
            </div>
            <span style={{ fontSize: "0.7em" , marginTop: "5px" }}>
              کلمه عبور باید حداقل ۸ کاراکتر باشد.از حروف٬اعدادو نماد ها استفاده
              کنید.
            </span>
            {errors.password ? (
              <div className="validation-register">
                <img src={alertValidation} alt="" />
                <span>{errors.password.message}</span>
              </div>
            ) : (
              <></>
            )}
            {errors.repPassword ? (
              <div className="validation-register">
                <img src={alertValidation} alt="" />
                <span>رمز عبور باید یکسان باشد</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        
        </div>

        <div className="signup-area">
          <div className="signup-button">
            <button onClick={handleSubmit(adduser)} className="signup">
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
      </form>

  );
};

export default CreateAccount;
