import React from 'react'
import logo from '../images/logo.jpg'
import preamble from "../images/preamble.png"
import "./HeadFlexStyle.css"


function HeadFlex() {
  return (
    <>
    <div className="ccontainer ccontainer-flex ">
      
    <div className='logo-container'>
    <img src={logo} className="logog" alt="Government of Maharashtra"/> 
    </div>

    <div className='premContainer'>
    <img src={preamble} className="logop" alt="Satyamev Jayate"/></div>
    </div>
  
    </>
  )
}

export default HeadFlex
