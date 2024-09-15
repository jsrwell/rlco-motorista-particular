import React from 'react'

const Team = () => {
	return (
		<div className="container-xxl py-5" id="team">
			<div className="container py-5">
				<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
					<h6 className="text-secondary text-uppercase">Our Team</h6>
					<h1 className="mb-5">Expert Team Members</h1>
				</div>
				<div className="row g-4">
					{[1, 2, 3, 4].map((member, index) => (
						<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.2}s`} key={index}>
							<div className="team-item p-4">
								<div className="overflow-hidden mb-4">
									<img className="img-fluid" src={`img/team-${member}.jpg`} alt={`team-${member}`} />
								</div>
								<h5 className="mb-0">Full Name</h5>
								<p>Designation</p>
								<div className="btn-slide mt-1">
									<i className="fa fa-share"></i>
									<span>
										<a href="www.google.com"><i className="fab fa-facebook-f"></i></a>
										<a href="www.google.com"><i className="fab fa-twitter"></i></a>
										<a href="www.google.com"><i className="fab fa-instagram"></i></a>
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Team
