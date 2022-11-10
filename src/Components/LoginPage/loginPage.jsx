import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
// import { login } from '../../Redux/Actions';
// import { logout } from '../../Redux/Actions';
import './CreateAccount.css';

const LoginPage = () => {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    
        function handleSubmit(e) {
          e.preventDefault();
          console.log('You clicked submit.');
        }
        
    return (
    <div>  
        <div className="login-page-area">
            <div className="login-page-title">
                <h3>ورود کاربر</h3>
            </div>
            <div className="input-login-group">
                <input type='text' id='name' required className='input-login' placeholder='نام کاربری خود را وارد کنید.' />
                <label htmlFor="name" className='input-login-label'>
                    نام کاربری
                </label>
            </div>
            <div className="input-login-group">
                <input type="password" id='name' className='input-login' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required placeholder='رمز عبور خود را وارد کنید.'/>
                <label htmlFor="name" className='input-login-label'>
                    رمز عبور
                </label>
            </div>
            <Link to='#'><span>اگر رمز عبور خود را فراموش کرده‌اید،اینجا کلیک کنید.</span></Link>
            <div className="login-button-area">
                <button className='login-button'>ورود</button>
                <div className="signup-instead">
                    <Link to="/Create-account">اگر قبلا ثبت نام نکردید وارد شوید.</Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>    
     );
}
 
export default LoginPage;