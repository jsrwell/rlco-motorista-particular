// src/components/Features.js
import React from 'react';

const Features = () => {
	return (
		<div className="container-fluid overflow-hidden py-5 px-lg-0" id="features">
			<div className="container feature py-5 px-lg-0">
				<div className="row g-5 mx-lg-0">
					<div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
						<h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
						<div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
							<i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
							<div className="ms-4">
								<h5>Worldwide Service</h5>
								<p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
							</div>
						</div>
						<div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
							<i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
							<div className="ms-4">
								<h5>On Time Delivery</h5>
								<p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
							</div>
						</div>
						<div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
							<i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
							<div className="ms-4">
								<h5>24/7 Telephone Support</h5>
								<p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
						<div className="position-relative h-100">
							<img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{ objectFit: 'cover' }} alt="Feature" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
