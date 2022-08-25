
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import Calapp from './component/Calapp';
import Profile from './component/Profile';
import Logout from './component/Logout';
import EmployeeDetail from './component/EmployeeDetail';
import CreateVacancy from './component/CreateVacancy';
import Headflex from './component/HeadFlex'
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";

function App() {
  return (
    <>
    <Headflex/>
     
    <Router>
    <Navbar/>
    <div>
      <Routes>
          <Route exact path="/News" element={<News/>}>
          </Route>
          </Routes>
          <Routes>
        <Route exact path="/Profile" element={<Profile/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Calapp" element={<Calapp/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/EmployeeDetail" element={<EmployeeDetail/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/CreateVacancy" element={<CreateVacancy/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/Logout" element={<Logout/>}></Route>
      </Routes>
    
    </div>
    </Router>
    </>
  
  )
}

export default App;

