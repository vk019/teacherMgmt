import React, {useState} from 'react'
import {NavLink } from 'react-router-dom';

import '../css/navStyle.css'

 


function List() {
  
  
  
  let activeStyle = {
    textDecoration: "underline",
    color:"orange"
  };
  return (
    <>
      <header>
        <div className="lcontainer lcontainer-flex ">
          
          <nav>
            <div className="List">
              <NavLink to="Profile" className="listItem"  style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Profile</NavLink>
              <NavLink to="/About" className="listItem" style={({ isActive }) =>
              isActive ? activeStyle : undefined } >About</NavLink>
              <NavLink to="/services" className="listItem" style={({ isActive }) =>
              isActive ? activeStyle : undefined } >Services</NavLink>
              <NavLink to="/contact" className="listItem" style={({ isActive }) =>
              isActive ? activeStyle : undefined } >Contact</NavLink>
              <NavLink to="/policy" className="listItem" style={({ isActive }) =>
              isActive ? activeStyle : undefined } >Policy</NavLink>
            </div>
          </nav>

          <div className="login" 
          onMouseLeave={()=> setDropdown(false)}>

          <button className="btn" onClick={()=> setDropdown(true)} >Login</button>
          {dropdown && <Dropdown/>}
          </div>



        </div>
      </header>
      
    </>
  )
}

export default List