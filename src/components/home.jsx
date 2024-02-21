/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import homeimg from '../images/homeimg.png'


function Home() {
  return (

    <div className='conatiner-fluid'>
      <div className="row align-items-center w-100 h-100 mx-auto my-auto">
        <div className="col-md-12 text-center">
          <div className="position-relative ">
            <img src={homeimg} className="img-fluid" />
            <div className="position-absolute top-50 start-50 translate-middle text-center justify-content-center">
              <div className="text-center text-white colg1">
                <h3 className="colh3 mb-4"><strong>BEA CAREGIVER ASSISTANT</strong></h3>
                <p className="colp text-with-shadow mb-4 fw-bold text-start text-justify text-center"> Introducing our revolutionary robot assistant, designed to redefine healthcare by ensuring optimal care, safety, and independence for your loved ones. Stay connected and informed with instant alerts and updates sent directly to your smartphone. From tracking medication schedules to detecting emergencies like falls or sudden health changes, this smart device offers unprecedented support. Embrace peace of mind and elevate the standard of care today with our cutting-edge robot assistant!</p>
                <a href="#pricing"><button type="button" id="btnShop" className="btn bg-white btn-lg me-3" style={{ 'color': '#935dff' }}>Shop</button></a>
                <button type="button" className="btn btn-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Learn More</button>

              </div>


            </div>
          </div>
        </div>
      </div><div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Newsletter</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3   text-start">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>











  );
};

export default Home