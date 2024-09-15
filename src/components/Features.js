import React from 'react';

const Features = () => {
	return (
		<div className="container-fluid overflow-hidden py-5 px-lg-0" id="features">
			<div className="container feature py-5 px-lg-0">
				<div className="row g-5 mx-lg-0">
					<div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="text-secondary text-uppercase mb-3">Nossos Diferenciais</h6>
						<h1 className="mb-5">A Melhor Opção em Transporte Particular</h1>
						<div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
							<i className="fab fa-whatsapp text-primary fa-3x flex-shrink-0"></i>
							<div className="ms-4">
								<h5>Suporte Rápido e Eficiente</h5>
								<p className="mb-0">Estamos disponíveis 24/7 para atender suas necessidades de transporte com rapidez e eficiência. Entre em contato via WhatsApp para um atendimento ágil.</p>
							</div>
						</div>
						<div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
							<i className="fa fa-calendar-check text-primary fa-3x flex-shrink-0"></i>
							<div className="ms-4">
								<h5>Agendamentos Flexíveis</h5>
								<p className="mb-0">Oferecemos agendamentos flexíveis para atender suas necessidades de transporte, garantindo que suas viagens sejam realizadas com pontualidade.</p>
							</div>
						</div>
						<div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
							<i className="fa fa-car text-primary fa-3x flex-shrink-0"></i>
							<div className="ms-4">
								<h5>Transporte Confiável</h5>
								<p className="mb-0">Com mais de 8 anos de experiência e mais de 5 mil viagens realizadas, garantimos um transporte confiável e de alta qualidade para todas as suas necessidades.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
						<div className="position-relative h-100 me-1">
							<img className="position-absolute img-fluid w-100 h-100 round-button" src="assets/img/ric-driver-on-car.jpg" style={{ objectFit: 'cover' }} alt="Feature" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
