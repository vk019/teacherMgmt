import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "../css/Dropdown.css"


function Sdropdown() {
  const[sdropdown, setSdropdown]= useState(false);
  return (
    <>
    <ul className={sdropdown ? "school-submenu clicked" : "school-submenu"} onClick={()=>setSdropdown(!sdropdown)}>
      
        <li>
            <Link className="ssubmenu-item" to="/">Manage School</Link>
        </li>
        <li >
            <Link className="ssubmenu-item" to="/ ">Add School</Link>
        </li>
    </ul>
    </>
  )
}

export default Sdropdown
