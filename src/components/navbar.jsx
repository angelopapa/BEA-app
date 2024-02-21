/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './home';
import Benefits from './benefits';
import Aboutus from './aboutus';
import Pricings from './pricings';
import Testimonials from './testimonials';
import Footer from './footer';


function Navbar() {
  const pageload = useNavigate();

  function navigazione() {
    pageload("/login")
  }

  const userSubmit = () => {
    navigazione()
  }

  return (
    <><div id="home" className="row">
      <div className="col-12">
      <nav className="navbar fixed-top navbar-expand-lg align-items-center">
  <div className="col-3 mt-3 d-flex align-items-center">
    <a className="navbar-brand text-white align-text-center mb-3 ms-3" aria-current="page" href="#home">
      <h4><i className="bi bi-robot d-inline-block align-text-top me-2"></i><strong>BEA</strong></h4>
    </a>
  </div>
  <button className="navbar-toggler bg-white" style={{ 'color': "#935dff" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="container-fluid justify-content-between text-center " style={{ 'fontSize': "22px" }}>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav text-center">
        <li className="nav-item">
          <a className="nav-link active ms-3 text-white" href="#benefits">Benefits</a>
        </li>
        <li className="nav-item">
         <a className="nav-link active ms-3 text-white" href="#aboutus">About Us</a>
        </li>
        <li className="nav-item">
         <a className="nav-link active ms-3 text-white" href="#pricing">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 text-white" href="#testimonials">Testimonials</a>
        </li>
        <li className="nav-item mt-3 mt-lg-0">
          <a className="nav-link active ms-3 text-white" href="#contact">Contact</a>
        </li>
      </ul>
      <div className="col-3 mt-0 d-flex align-items-center justify-content-end ">
     <button type="button" className="btn btn-link">
          <Link to="/login">
            <i className="bi bi-person-circle text-white" style={{"fontSize": "26px"}}></i>
          </Link>
        </button>
  </div>
      
    </div>
  </div>
      
</nav>

      </div>
      <Home />
    <Benefits  />
    <Aboutus />
    <Pricings />
    <Testimonials />
    <Footer />
    </div>

   
      </>

  );
};

export default Navbar;
