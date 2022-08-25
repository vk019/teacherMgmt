import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand mx-3" to="Home">Teacher Portal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active mx-3" aria-current="page" to="Profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3" to="Vacancy">Vacancies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3" to="Calapp">Academic Calendar</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-3" to ="News">News</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link mx-3" to ="home">Logout</Link>
        </li>
      
        </ul>
        
    
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
</> 
  );
}
