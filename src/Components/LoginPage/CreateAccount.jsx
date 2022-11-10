import React from "react";
import imgArea from './svg/account.svg';
import {Link} from 'react-router-dom';
import './CreateAccount.css';
import Footer from "../Footer/Footer";

const CreateAccount = () => {
  return (
      <div>
          <div className="CreateAccount-box">
          <div className="UsernamePass">
          <div className="col-lg-8">
          <div style={{marginBottom:'30px'}}><h3>ثبت نام</h3></div>
            <div style={{display:'flex' , marginBottom:'30px'}}>
            <div className="input-group">
              <input type="text" id="name" required className="input" />
              <label htmlFor="name" className="input-label">
                نام
              </label>
            </div>
            <div style={{marginLeft:'auto'}} className="input-group">
              <input type="text" id="name" required className="input" />
              <label htmlFor="name" className="input-label">
                نام خانوادگی
              </label>
            </div>
            </div>
            
            <div className="input-group">
              <input type="text" id="name" required className="input" placeholder="email.com@"/>
              <label htmlFor="name" className="input-label">
                نام کاربری
              </label>
            </div>
            <span style={{fontSize:'12px'}}>می‌توانید از حروف و اعداد استفاده کنید.</span>
            
            
           <div style={{display:'flex'  , marginTop:'60px'}}>
            <div className="input-group">
              <input type="password" id="name" className="input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
              <label htmlFor="name" className="input-label">
                رمز عبور
              </label>
            </div>
            <div style={{marginLeft:'auto'}} className="input-group">
              <input type="password" id="name" required className="input" />
              <label htmlFor="name" className="input-label">
                تکرار رمز عبور
              </label>
            </div>
            </div>
            <span style={{fontSize:'12px'}}>کلمه عبور باید حداقل ۸ کاراکتر باشد.از حروف٬اعدادو نماد ها استفاده کنید.</span>
          </div>
          <div className="col-lg-4 imgArea">
                  <img src={imgArea} alt="" />  
          </div>
          </div>

          <div className="signup-area">
          <div className="signup-button"><button className="signup">ثبت نام</button></div>
          <div><Link className="signin-instead" to='/login-page'>اگر قبلا ثبت نام کردید وارد شوید.</Link></div>
          </div>
          </div>
          <Footer />
      </div>
  );
};

export default CreateAccount;
