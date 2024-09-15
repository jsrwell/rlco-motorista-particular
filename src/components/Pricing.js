import React from 'react';

const Pricing = () => {
	return (
		<div className="container-xxl py-5" id="pricing">
			<div className="container py-5">
				<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
					<h6 className="text-secondary text-uppercase">Planos de Preços</h6>
					<h1 className="mb-5">Planos de Transporte Sob Medida</h1>
				</div>
				<div className="row g-4">
					<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
						<div className="price-item">
							<div className="border-bottom p-4 mb-4">
								<h5 className="text-primary mb-1">Plano Aeroporto</h5>
								<h1 className="display-5 mb-0">
									<small className="align-top" style={{ fontSize: '16px', lineHeight: '45px' }}>A partir de </small>
									<small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>R$</small>
									150.00<small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}> / Viagem</small>
								</h1>
							</div>
							<div className="p-4 pt-0">
								<p><i className="fa fa-check text-success me-3"></i>Translado de aeroporto</p>
								<p><i className="fa fa-check text-success me-3"></i>Porta-malas adequado</p>
								<p><i className="fa fa-check text-success me-3"></i>Pontual</p>
								<p><i className="fa fa-check text-success me-3"></i>Reserva antecipada</p>
								<a className="btn-slide mt-2" href="https://wa.me/5541998765432?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Plano%20Aeroporto" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-arrow-right"></i>
									<span>Contratar Agora</span>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
						<div className="price-item">
							<div className="border-bottom p-4 mb-4">
								<h5 className="text-primary mb-1">Plano Eventos</h5>
								<h1 className="display-5 mb-0">
									<small className="align-top" style={{ fontSize: '16px', lineHeight: '45px' }}>A partir de </small>
									<small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>R$</small>
									300.00<small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}> / Viagem</small>
								</h1>
							</div>
							<div className="p-4 pt-0">
								<p><i className="fa fa-check text-success me-3"></i>Transporte para eventos e reuniões</p>
								<p><i className="fa fa-check text-success me-3"></i>Profissionalismo</p>
								<p><i className="fa fa-check text-success me-3"></i>Serviço de alta qualidade</p>
								<p><i className="fa fa-check text-success me-3"></i>Bebidas e conforto extra</p>
								<a className="btn-slide mt-2" href="https://wa.me/5541998765432?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Plano%20Eventos" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-arrow-right"></i>
									<span>Contratar Agora</span>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
						<div className="price-item">
							<div className="border-bottom p-4 mb-4">
								<h5 className="text-primary mb-1">Plano Personalizado</h5>
								<h1 className="display-5 mb-0">
									<small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>Faça o seu </small>
									Orçamento
								</h1>
							</div>
							<div className="p-4 pt-0">
								<p><i className="fa fa-check text-success me-3"></i>Horários fixos na semana</p>
								<p><i className="fa fa-check text-success me-3"></i>Pontualidade e profissionalismo</p>
								<p><i className="fa fa-check text-success me-3"></i>Atendimento personalizado</p>
								<p><i className="fa fa-check text-success me-3"></i>Serviço completo e confortos extras</p>
								<a className="btn-slide mt-2" href="https://wa.me/5541998765432?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Plano%20Personalizado" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-arrow-right"></i>
									<span>Contratar Agora</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
