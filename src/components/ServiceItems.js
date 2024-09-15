// src/components/ServiceItems.js
import React from 'react';

const ServiceItems = () => {
	return (
		<div className="row g-5" id="serviceItems">
			<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
				<div className="service-item p-4">
					<div className="overflow-hidden mb-4">
						<img className="img-fluid" src="img/service-4.jpg" alt="Train Freight" />
					</div>
					<h4 className="mb-3">Train Freight</h4>
					<p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
					<a className="btn-slide mt-2" href="www.google.com">
						<i className="fa fa-arrow-right"></i>
						<span>Read More</span>
					</a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
				<div className="service-item p-4">
					<div className="overflow-hidden mb-4">
						<img className="img-fluid" src="img/service-5.jpg" alt="Customs Clearance" />
					</div>
					<h4 className="mb-3">Customs Clearance</h4>
					<p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
					<a className="btn-slide mt-2" href="www.google.com">
						<i className="fa fa-arrow-right"></i>
						<span>Read More</span>
					</a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
				<div className="service-item p-4">
					<div className="overflow-hidden mb-4">
						<img className="img-fluid" src="img/service-6.jpg" alt="Warehouse Solutions" />
					</div>
					<h4 className="mb-3">Warehouse Solutions</h4>
					<p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
					<a className="btn-slide mt-2" href="www.google.com">
						<i className="fa fa-arrow-right"></i>
						<span>Read More</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ServiceItems;
