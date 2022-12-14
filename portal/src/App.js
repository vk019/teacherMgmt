
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import Calapp from './component/Calapp';
import Profile from './component/Profile';
import Logout from './component/Logout';
import Vacancy from './component/Vacancy';
import Home from './component/Home';



import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";


function App() {
  return (
    <>
     
    <Router>
    <Navbar/>
   
    <div>
      <Routes>
          <Route exact path="/News" element={<News/>}>
          </Route>
          </Routes>
         
    < Routes>
    <Route exact path="/Home" element={<Home/>}>
    </Route>
    </Routes>
          <Routes>
        <Route exact path="/Profile" element={<Profile/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Calapp" element={<Calapp/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Logout" element={<Logout/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Vacancy" element={<Vacancy/>}></Route>
      </Routes>
      
    
    </div>
    </Router>
    </>
  
  )
}

export default App;
