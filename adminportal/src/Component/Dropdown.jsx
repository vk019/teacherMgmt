import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "../css/Dropdown.css"


function Dropdown() {
  const[dropdown, setDropdown]= useState(false);
  return (
    <>
    <ul className={dropdown ? "login-submenu clicked" : "login-submenu"} onClick={()=>setDropdown(!dropdown)}>
        <li>
            <Link className="submenu-item" to="/login" >Teacher Login</Link>
        </li>
        <li>
            <Link className="submenu-item" to="/schoolLogin">School Login</Link>
        </li>
        <li >
            <Link className="submenu-item" to="/adminLogin">Admin Login</Link>
        </li>
    </ul>
    </>
  )
}

export default Dropdown
