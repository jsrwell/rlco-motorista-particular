import React from 'react';

const Team = () => {
	return (
		<div className="container-xxl py-5" id="team">
			<div className="container py-5">
				<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
					<h6 className="text-secondary text-uppercase">Time RLCO</h6>
					<h1 className="mb-5">Equipe</h1>
				</div>
				<div className="row g-4 justify-content-center">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
						<div className="team-item p-4">
							<div className="overflow-hidden mb-4">
								<img className="img-fluid" src="assets/img/ric-perfil.jpg" alt="Ricardo Leandro" />
							</div>
							<h5 className="mb-0">Ricardo Leandro</h5>
							<p>Motorista</p>
							<div className="btn-slide mt-1">
								<i className="fa fa-share"></i>
								<span>
									<a href="https://wa.me/5541999261909?text=Ol%C3%A1%20Ricardo%2C%20gostaria%20de%20saber%20mais%20sobre%20transportes%20particulares%20com%20voc%C3%AA." target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
									{/* <a href="https://www.facebook.com/ricardo.leandro" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
									<a href="https://twitter.com/ricardo_leandro" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
									<a href="https://www.instagram.com/ricardo_leandro" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> */}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
