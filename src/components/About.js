// src/components/About.js
import React from 'react';

const About = () => (
  <div className="container-fluid overflow-hidden py-5 px-lg-0" id='about'>
    <div className="container about py-5 px-lg-0">
      <div className="row g-5 mx-lg-0">
        <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
          <div className="position-relative h-100">
            <img className="position-absolute img-fluid w-100 h-100" src="assets/img/about.jpg" style={{ objectFit: 'cover' }} alt="" />
          </div>
        </div>
        <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
          <h1 className="mb-5">Quick Transport and Logistics Solutions</h1>
          <p className="mb-5">Tempor erat elitr rebum at clita...</p>
          <div className="row g-4 mb-5">
            {/* About items */}
          </div>
          <a href="www.google.com" className="btn btn-primary py-3 px-5">Explore More</a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
