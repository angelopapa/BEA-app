/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import beaprice from '../images/beaprice.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Pricings() {
  const pageload = useNavigate();

  function navigazione() {
    pageload("/pay")
  }

  const userSubmit = () => {
    navigazione()
  }

  const [displayText, setDisplayText] = useState('');

  const handleClick = () => {
    // Seleziona l'elemento h1
    const h1Element = document.getElementById('dynamicH1');
    // Estrai il testo dall'elemento h1
    const text = h1Element.innerText;
    // Imposta il testo estratto nello stato displayText
    setDisplayText(text);
  };


  return (
    <div id="pricing" className="row g-2 mt-5 mb-5 justify-content-center">
      <h4 class="colh3  font-weight-bold text-center"><strong>OUR MODELS</strong></h4>
      <div className="col-lg-0 col-md-3 mb-5">
        <div className="card p-2 text-center mt-4 mx-2 bounce-card h-100">
          <div className="p-info px-3 py-3">
            <div>
              <h5 className="mb-0">BEA Basic</h5>
              <span>Professional Robot Caregiver</span>
            </div>
            <div className="p-price d-flex flex-row">
              <span>$</span>
              <h1 id="dynamicH1">349</h1>
            </div>
            <div className="heart">
              <i className="bx bx-heart"></i>
            </div>
          </div>
          <div className="text-center p-image">
            <img src={beaprice} alt="BEA Basic" />
          </div>
          <div className="p-about">
            <p>
              The "BEA Basic" caregiver robot offers essential features like vital condition monitoring and daily activity support at an affordable price. Despite its simplicity, it ensures reliability and safety. With an intuitive interface and voice commands, it provides basic assistance and keeps patients in contact with care staff.</p>
          </div>
          <div className="buttons d-flex flex-row gap-3 px-3">
            <button className="btn btn-v w-100">View</button>
            <a><button className="btn buy btn-outline-success w-100" ><Link to="/pay" className="custom-link">Buy Now</Link></button>
                     
            
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-0 col-md-3 mb-5">
        <div className="card p-2 text-center mt-4 mx-2 bounce-card h-100">
          <div class="p-info px-3 py-3">
            <div>
              <h5 class="mb-0">BEA Plus</h5>
              <span>Professional Robot Caregiver</span>
            </div>
            <div class="p-price d-flex flex-row">
              <span>$</span>
              <h1>549</h1>
            </div>
            <div class="heart">
              <i class="bx bx-heart"></i>
            </div>
          </div>
          <div class="text-center p-image">
            <img src={beaprice} />
          </div> <div class="p-about">
            <p>The “BEA Plus” assistance robot, a mid-range option, offers vital health monitoring, medical assistance and support for daily activities at an affordable price. Its robust AI and intuitive interface ensure personalized care, while continuous monitoring detects anomalies and alerts healthcare personnel during emergencies.</p>
          </div>
          <div class="buttons d-flex flex-row gap-3 px-3">
            <button class="btn btn-v w-100">View</button>
            <a><button class="btn buy btn-outline-success w-100"><Link to="/pay" className="custom-link">Buy Now</Link></button></a>
          </div>
        </div>
      </div>

      <div className="col-lg-0 col-md-3 mb-5">
        <div className="card p-2 text-center mt-4 mx-2 bounce-card h-100">
          <div class="p-info px-3 py-3">
            <div>
              <h5 class="mb-0">BEA Ultra</h5>
              <span>Professional Robot Caregiver</span>
            </div>
            <div class="p-price d-flex flex-row">
              <span>$</span>
              <h1>849</h1>
            </div>
            <div class="heart">
              <i class="bx bx-heart"></i>
            </div>
          </div>
          <div class="text-center p-image">
            <img src={beaprice} />
          </div> <div class="p-about">
            <p >The "BEA Ultra" caregiver robot utilizes advanced AI and sensors to offer personalized assistance including health monitoring, medication administration, physical therapy, and activity tracking. Its intuitive interface fosters patient interaction, making it a reliable care companion.</p>
          </div>
          <div class="buttons d-flex flex-row gap-3 px-3">
            <button class="btn btn-v w-100">View</button>
            <a><button class="btn buy btn-outline-success w-100"><Link to="/pay" className="custom-link">Buy Now</Link></button></a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Pricings