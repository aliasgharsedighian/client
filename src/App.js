import './App.css';
import './flexboxgrid.css'
import UserNavbar from './Components/Navbar/userNavbar';
import {Route ,Routes} from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import { useState } from "react";
import { ThemeContext } from "./Context/Context";
import LoginPage from './Components/LoginPage/loginPage';
import CreateAccount from './Components/LoginPage/CreateAccount';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

function App() {
 
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme 
      }}>
      <div className='App' id={theme}>
        <UserNavbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login-page' element={<LoginPage />} />
          <Route path='create-account' element={<CreateAccount />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );

  
}

export default App;
