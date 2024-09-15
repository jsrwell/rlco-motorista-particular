import React from 'react';

const ServiceItems = () => {
	return (
		<div className="row g-5" id="serviceItems">
			<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
				<div className="service-item p-4">
					<div className="overflow-hidden mb-4 round-button">
						<img className="img-fluid round-button" src="assets/img/corporate-trip.jpg" alt="Viagens Corporativas" />
					</div>
					<h4 className="mb-3">Viagens Corporativas</h4>
					<p>Oferecemos transporte executivo para reuniões, eventos e viagens de negócios com total conforto, segurança e pontualidade.</p>
					<a 
						className="btn-slide mt-2" 
						href="https://wa.me/5541998765432?text=Olá, gostaria de agendar uma Viagem Corporativa." 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<i className="fab fa-whatsapp"></i>
						<span>Agende Agora</span>
					</a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
				<div className="service-item p-4 round-button">
					<div className="overflow-hidden mb-4 round-button">
						<img className="img-fluid round-button" src="assets/img/aeroport-trip.jpg" alt="Traslados Aeroportuários" />
					</div>
					<h4 className="mb-3">Traslados Aeroportuários</h4>
					<p>Serviço de traslado com conforto e pontualidade, garantindo que você chegue ao aeroporto a tempo e com tranquilidade.</p>
					<a 
						className="btn-slide mt-2" 
						href="https://wa.me/5541998765432?text=Olá, gostaria de agendar um Traslado Aeroportuário." 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<i className="fab fa-whatsapp"></i>
						<span>Agende Agora</span>
					</a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
				<div className="service-item p-4">
					<div className="overflow-hidden mb-4 round-button">
						<img className="img-fluid round-button" src="assets/img/leisure-trip.jpg" alt="Viagens de Lazer" />
					</div>
					<h4 className="mb-3">Viagens de Lazer</h4>
					<p>Seja para passeios ou viagens de longa distância, oferecemos transporte particular para garantir uma experiência agradável.</p>
					<a 
						className="btn-slide mt-2" 
						href="https://wa.me/5541998765432?text=Olá, gostaria de agendar uma Viagem de Lazer." 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<i className="fab fa-whatsapp"></i>
						<span>Agende Agora</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ServiceItems;
