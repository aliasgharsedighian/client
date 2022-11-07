import './App.css';
import './flexboxgrid.css'
import UserNavbar from './Components/Navbar/userNavbar';
import {Route ,Routes} from 'react-router-dom';
import HomePage from './Components/Home/HomePage';


function App() {
  return (
    <div className='App'>
    <UserNavbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    </div>
  );

  function handleIncrementShopping(){
    //function add here
  }
}

export default App;
