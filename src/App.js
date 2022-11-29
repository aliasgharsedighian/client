import "./App.css";
import "./flexboxgrid.css";
import UserNavbar from "./Components/Navbar/userNavbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import { useState } from "react";
import { ThemeContext } from "./Context/Context";
import LoginPage from "./Components/LoginPage/loginPage";
import CreateAccount from "./Components/LoginPage/CreateAccount";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import HomePageProducts from "./Components/Products/Products";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Footer from "./Components/Footer/Footer";

function App() {
  // const {productId} = useParams();
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="App" id={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <UserNavbar />
      </ThemeContext.Provider>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePageProducts />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
