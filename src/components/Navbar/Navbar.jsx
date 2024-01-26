import React from 'react';
import '../../index.css';
import './Navbar.css';

function Navbar() {
  return (
    <header className="header-navber-area">
      <div className="nav-top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="call-to-action">
                <p><i className="icofont-envelope"></i> Email: <a href="mailto:info@macrepairman.ca">info@macrepairman.ca</a></p>
                <p><i className="icofont-phone"></i> Phone: <a href="tel:5195050058">24/7 Phone Support: (519) 505-0058</a></p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="opening-hours">
                <p><i className="icofont-wall-clock"></i> Store Hours: 11:00am - 4:00pm</p>
                <p><i className="icofont-wall-clock"></i> Monday to Friday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-b navbar-trans navbar-expand-lg" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll" href="#home">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="white-logo" alt="logo" />
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="black-logo" width="150" alt="logo" />               
          </a>
          <button className="navbar-toggler collapsed" type="button"
            data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false"
            aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end"
            id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link js-scroll active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link js-scroll" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link js-scroll" href="#repairs">Services</a></li>
              <li className="nav-item"><a className="nav-link js-scroll" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;