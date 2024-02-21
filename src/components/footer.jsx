/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer() {
  return (
    <div id="contact" className='footer container text-white mt-5 text-center text-lg-start'>
      <div  className="row mt-5">
        <div className="col-4">
          <h5 className="colh5 text-center mb-4"><strong>ABOUT COMPANY</strong></h5>
          <p className='text-justify text-start'>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio magnam ipsa quae quod odit repudiandae ad, perspiciatis dolor quo, doloremque, at facilis porro fugiat consequuntur tempore explicabo delectus aperiam nobis.
          </p>
          <div className="mt-4 d-flex justify-content-start ms-3">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-2">
                <a className="nav-link" href="#"><i className="bi bi-facebook" style={{ 'fontSize': '24px' }}></i></a>
              </li>
              <li className="nav-item  me-2">
                <a className="nav-link" href="#"><i className="bi bi-instagram" style={{ 'fontSize': '24px' }}></i></a>
              </li>
              <li className="nav-item  me-2">
                <a className="nav-link" href="#"><i className="bi bi-linkedin" style={{ 'fontSize': '24px' }}></i></a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#"><i className="bi bi-github" style={{ 'fontSize': '24px' }}></i></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-4 align-items-center">
          <h5 className="colh5 text-center mb-4 pb-1"><strong>CONTACT</strong></h5>
          <ul className="" style={{ 'marginLeft': '1.65em', 'listStyleType': 'none', 'padding': '0' }}>
    <li className="mb-3 d-flex align-content-center" >
        <span className=""><i className="bi bi-house-fill" style={{ 'fontSize': '22px' }}></i></span>
        <span className="ms-2 text-center">Rionero in Vulture, 85028, IT</span>
    </li>
    <li className="mb-3 d-flex align-content-center">
        <span className=""><i className="bi bi-envelope-fill" style={{ 'fontSize': '22px' }}></i></span>
        <span className="ms-2 text-center">beasupport@gmail.com</span>
    </li>
    <li className="mb-3 d-flex align-content-center">
        <span className=""><i className="bi bi-telephone-fill" style={{ 'fontSize': '22px' }} ></i></span>
        <span className="ms-2 text-center">+39 23456788</span>
    </li>
</ul>

        </div>

        <div className="col-4">
          <h5 className="colh5 text-center mb-4"><strong>OPENING HOURS</strong></h5>
          <div class="container">
    <table class="table text-center">
      <tbody className="font-weight-normal">
        <tr>
          <td>Mon - Thu:</td>
          <td>8am - 9pm</td>
        </tr>
        <tr>
          <td>Fri - Sat:</td>
          <td>8am - 1am</td>
        </tr>
      </tbody>
    </table>
  </div>
        </div>



      <div className="text-center p-3" style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright
      </div>


      </div>

    </div>
  );
}

export default Footer;
