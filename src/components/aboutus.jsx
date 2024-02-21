import React from 'react'
import catantos from '../images/catantos.jpg'
import dogangp from '../images/dogangp.jpg'

function Aboutus() {
  return (
    
    <div class="container-fluid justify-content-center text-center">
    <div id="aboutus" class="row mt-5 mb-5 aboutbg">
        <div class="col-md-4 mt-5 mb-5">
            <div class="row">
                <div class="col text-center">
                    <img src={catantos} alt="Cat" class="rounded-circle img-fluid mt-5 me-0" style={{'max-width': '200px', 'max-height': '200px'}}/>
                    <p class='text-white' style={{'font-size': '20px'}}>Antoss</p>
                </div>
                <div class="col text-center">
                    <img src={dogangp} alt="Dog" class="rounded-circle img-fluid justify-content-center mt-5 ms-0" style={{'max-width': '200px', 'max-height': '200px'}}/>
                    <p class='text-white' style={{'font-size': '20px'}}>Angp</p>
                </div>
            </div>
        </div>

        <div class="col-md-7 mt-5 mb-5">
            <h3 class='colh3 shak text-start'><strong><i class="bi bi-caret-right-fill "></i>ABOUT US</strong></h3>
            <p class='text-justify fw-bold text-center text-end text-white'>We are a duo of passionate student programmers in the world of Healthcare who have designed and developed this innovative caregiver robot called BEA. With a shared vision to improve the lives of people and those who care for them, we have combined our engineering expertise and healthcare to create a cutting-edge solution. Our mission is to provide personalized care and support through advanced features such as medication reminders, real-time monitoring and customizable programs. With BEA we aim to empower healthcare workers and promote better health outcomes for their loved ones.</p>
        </div>
    </div>
</div>







  )
}

export default Aboutus