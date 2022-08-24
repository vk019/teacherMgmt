import React, {useState} from 'react'
import {NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import '../css/navStyle.css'

 


function Navbar() {
  
  
  
  let activeStyle = {
    textDecoration: "underline",
    color:"light"
  };
  return (
    <>
      <header>
        <div className="lcontainer lcontainer-flex ">
          
          <nav>
            <div className="List">
              <NavLink to="/" className="listItem mx-2"  style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Home</NavLink>
              <NavLink to="/About" className="listItem mx-2" style={({ isActive }) =>
              isActive ? activeStyle : undefined } >About</NavLink>
              <NavLink to="/services" className="listItem mx-2" style={({ isActive }) =>
              isActive ? activeStyle : undefined } >Services</NavLink>
              <NavLink to="/contact" className="listItem mx-2" style={({ isActive }) =>
              isActive ? activeStyle : undefined } >Contact</NavLink>
              <NavLink to="/policy" className="listItem mx-2" style={({ isActive }) =>
              isActive ? activeStyle : undefined } >Policy</NavLink>
            </div>
            
      
          </nav>
          <div className="Login"  onMouseLeave={()=> setDropdown(false)}>

</div>
</div>
      </header>
      
    </>
  )
}

export default Navbar