// src/components/Fact.js
import React from 'react';

const Fact = () => (
  <div className="container-xxl py-5" id="fact">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
          <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
          <p className="mb-5">Tempor erat elitr rebum at clita...</p>
          <div className="d-flex align-items-center">
            <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
            <div className="ps-4">
              <h6>Call for any query!</h6>
              <h3 className="text-primary m-0">+012 345 6789</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row g-4 align-items-center">
            {/* Fact items */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Fact;
