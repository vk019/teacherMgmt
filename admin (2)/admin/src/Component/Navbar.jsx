import React from 'react'
import {NavLink} from 'react-router-dom';
import '../css/navStyle.css'

function Navbar() {
  
 
  
  let activeStyle = {
    textDecoration: "none",
    color:"orange"
  };
  return (
    <>
    <header>
        <div className="lcontainer lcontainer-flex ">
          
          
          <nav className="navbar">
            <div className="List">

              <NavLink to="/" className="listItem"  style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Home</NavLink>


              

              <NavLink to="/Teacher" className="listItem" id='tea' style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Manage Teachers</NavLink>
          

              <NavLink to="/School" className="listItem" id='sch'style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Manage Schools</NavLink>
              <NavLink to="/Calapp" className="listItem" id='cal' style={({ isActive }) =>
              isActive ? activeStyle : undefined } >Calendar</NavLink>
              
              
              <NavLink to="/Gallery" className="listItem" id='gall' style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Gallery</NavLink>
            </div>
          </nav>

          <div className="login">
          <button className="btn" >Logout</button>
          
          </div>



        </div>
      </header>
      
      
    </>
  )
}

export default Navbar