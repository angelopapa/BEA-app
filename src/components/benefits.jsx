import React, { useState } from 'react'

function Benefits() {   

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    
    
    return (
         
      <div id="benefits" className="row g-3 justify-content-center align-content-center">
      <div className="col-lg-0 col-md-3 mb-4">
        <div className={isHovered ? "card text-center mt-4 mx-2 bounce-card h-100" : "card text-center mb-4 mt-4 mx-2 h-100"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="card-body d-flex flex-column justify-content-between align-items-center">
            <i className="bi bi-hospital custom-icon" style={{ 'color': ' #935dff' }}></i>
            <h5  className="card-title mt-2 colh5">Emergency Service</h5>
            <p className="card-text mb-4">With the touch of a button, our device quickly initiates emergency calls, connecting your loved ones to help them when they need it most. Its rapid response system ensures immediate assistance during critical situations, offering peace of mind to both caregivers and recipients.</p>
          </div>
        </div>
      </div>
    
      <div className="col-lg-0 col-md-3 mb-4">
        <div className={isHovered ? "card text-center mt-4 mx-2 bounce-card h-100" : "card text-center mt-4 mx-2 h-100"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="card-body d-flex flex-column justify-content-between align-items-center">
            <i className="bi bi-heart-pulse custom-icon" style={{ 'color': ' #935dff' }}></i>
            <h5 className="card-title mt-3 colh5">Monitoring</h5>
            <p className="card-text">Offering real-time monitoring capabilities, BEA maintains vigilant control over vital signs. These features provide valuable information about your loved one's well-being, ensuring that their health is constantly monitored. BEA's monitoring capabilities offer peace of mind and proactive assistance.</p>
          </div>
        </div>
      </div>
    
      <div className="col-lg-0 col-md-3 mb-4">
        <div className={isHovered ? "card text-center mt-4 mx-2 bounce-card h-100" : "card text-center mt-4 mx-2 h-100"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="card-body d-flex flex-column justify-content-between align-items-center">
            <i className="bi bi-prescription2 custom-icon" style={{ 'color': ' #935dff' }}></i>
            <h5 className="card-title mt-3 colh5">Medication Reminders</h5>
            <p className="card-text">BEA offers personalized medication reminders, ensuring timely and accurate administration of treatments. Through customizable schedules and alerts, it helps your loved ones stay on track with their medication regimen, promoting better health outcomes and overall well-being.</p>
          </div>
        </div>
      </div>
    </div>   
      




    )
}

export default Benefits