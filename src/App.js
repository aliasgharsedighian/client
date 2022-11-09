import './App.css';
import './flexboxgrid.css'
import UserNavbar from './Components/Navbar/userNavbar';
import {Route ,Routes} from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import { useState } from "react";
import { ThemeContext } from "./Context/Context";

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
        </Routes>
      </div>
    </ThemeContext.Provider>
  );

  
}

export default App;
