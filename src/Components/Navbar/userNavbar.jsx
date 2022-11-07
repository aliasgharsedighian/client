import React from 'react';
import {NavLink} from 'react-router-dom';
import './userNavbar.css';

const UserNavbar = () => {
    return ( 
        <>
        <nav className="user-navbar-area">
            <div className="nav-right">
                <a href=""><i class="far fa-user"></i></a>
                <a className='number-shopping-icon' href="">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>0</span>
                </a>
                <a href=""><i class="fa-solid fa-house"></i></a>
                <a href=""><i class="fa-sharp fa-solid fa-magnifying-glass"></i></a>

            </div>
            <div className="nav-left">
                 <div className="register-login-btn">
                    <i class="fas fa-user"></i>
                    <a href="#">ثبت نام / ورود</a>
                 </div>
            </div>
        </nav>
        </>
     );
}
 
export default UserNavbar;