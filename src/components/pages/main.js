import React from 'react';
import "./style.css"; 
function Main() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top p-0">
    <h4 className="navbar-brand d-flex align-items-center">Routers </h4>
          <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto center">
        <a href="/" className="nav-item nav-link">
          Home
        </a>
       
        <a href="/about" className="nav-item nav-link">
          About
        </a>
    
     
        <a href="/contactus" className="nav-item nav-link">
           Contact
        </a>
        </div>

    </div>
  </nav>
  )
}

export default Main;