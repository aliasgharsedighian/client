import React from "react";
import "./userNavbar.css";
import { useSelector} from "react-redux";
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Context";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <i class="fa-solid fa-house"></i>
            </Link>
            <a href="">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </a>
            <div className="switch">
              <label>  
              <ReactSwitch 
              onChange={ThemeContexts.toggleTheme} 
              checked={ThemeContexts.theme === "dark"}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color:'#ffcc00',
                    fontSize: 15
                  }}
                >
                  <i class="fa fa-sun" aria-hidden='true'></i>
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "white",
                    fontSize: 15
                  }}
                >
                  <i class="fa fa-moon" aria-hidden='true'></i>
                </div>
              }
              className="react-switch"
              id="material-switch"
              />
              </label>
            </div>
          </div>
          <div className="nav-left">
            <div className="register-login-btn">
              <i class="fas fa-user"></i>
              <Link to="/Create-account">ثبت نام / ورود</Link>
            </div>
          </div>
        </nav>
    </>
  );
};


export default UserNavbar;
// {ThemeContexts.theme === "light" ? "Light" : "Dark"}