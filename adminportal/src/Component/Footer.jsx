import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Footer.css' 


function Footer() {
  return (
    
        <div class="Footer">
    <footer>
      <ul className='foot'>
        <li><Link to="#">© Copyright 2022</Link></li>
        <li><Link to="">Contact</Link></li>
        <li><Link to="">About</Link></li>
      </ul>
    </footer>
  </div>
   
  )
}

export default Footer;
