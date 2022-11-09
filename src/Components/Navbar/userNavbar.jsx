import React from "react";
import { NavLink } from "react-router-dom";
import "./userNavbar.css";
import { useSelector} from "react-redux";
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Context";

const UserNavbar = () => {
  const addtocards = useSelector((state) => state.addtocards);

  const ThemeContexts = useContext(ThemeContext);

  return (
    <>
        <nav className="user-navbar-area">
          <div className="nav-right">
            <a href="">
              <i class="far fa-user"></i>
            </a>
            <a className="number-shopping-icon" href="">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>{addtocards}</span>
            </a>
            <a href="">
              <i class="fa-solid fa-house"></i>
            </a>
            <a href="">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </a>
            <div className="switch">
              {/* <label> {ThemeContexts.theme === "light" ? "Light" : "Dark"} </label> */}
              <ReactSwitch onChange={ThemeContexts.toggleTheme} checked={ThemeContexts.theme === "dark"} />
            </div>
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
};


export default UserNavbar;
