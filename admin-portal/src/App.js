import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AddTeacher from './components/AddTeacher';
import TeacherList from './components/TeacherList';
import Navbar from './components/Navbar';
import Calapp from './components/Calapp';



function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <div className="main-content">
          <Routes>
    
              
            <Route  exact path="/AddTeacher" element={<AddTeacher/>} >

            </Route>
           
          </Routes>
            
            <Routes>
              <Route  exact path="/TeacherList" element={<TeacherList/>}>
              </Route>
              </Routes>
              <Routes>
        <Route exact path="/Calapp" element={<Calapp/>}></Route>
      </Routes>
        </div>
    </Router>
    </>
  );
};

export default App;