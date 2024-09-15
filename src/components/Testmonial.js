import React from 'react';

const Testimonial = () => {
	return (
		<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" id="testmonial">
			<div className="container py-5">
				<div className="text-center">
					<h6 className="text-secondary text-uppercase">Depoimentos</h6>
					<h1 className="mb-0">O que Nossos Clientes Dizem!</h1>
				</div>
				<div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
					<div className="testimonial-item p-4 my-5">
						<i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
						<div className="d-flex align-items-end mb-4 round-button">
							<img className="img-fluid flex-shrink-0 round-button" src="assets/img/testimonial-1.jpg" style={{ width: '80px', height: '80px' }} alt="testimonial-1" />
							<div className="ms-4">
								<h5 className="mb-1">Ana Costa</h5>
								<p className="m-0">Empresária</p>
							</div>
						</div>
						<p className="mb-0">
							"O serviço de transporte é excepcional! O motorista é sempre pontual e muito profissional. As viagens são confortáveis e seguras, o que me dá tranquilidade para meus compromissos."
						</p>
					</div>
					<div className="testimonial-item p-4 my-5">
						<i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
						<div className="d-flex align-items-end mb-4 round-button">
							<img className="img-fluid flex-shrink-0 round-button" src="assets/img/testimonial-2.jpg" style={{ width: '80px', height: '80px' }} alt="testimonial-2" />
							<div className="ms-4">
								<h5 className="mb-1">João Pereira</h5>
								<p className="m-0">Advogado</p>
							</div>
						</div>
						<p className="mb-0">
							"Desde que comecei a usar este serviço de transporte, minha vida se tornou muito mais fácil. O motorista é sempre educado e conhece bem a cidade. Altamente recomendado!"
						</p>
					</div>
					<div className="testimonial-item p-4 my-5">
						<i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
						<div className="d-flex align-items-end mb-4 round-button">
							<img className="img-fluid flex-shrink-0 round-button" src="assets/img/testimonial-4.jpg" style={{ width: '80px', height: '80px' }} alt="testimonial-3" />
							<div className="ms-4">
								<h5 className="mb-1">Maria Silva</h5>
								<p className="m-0">Executiva</p>
							</div>
						</div>
						<p className="mb-0">
							"Excelente serviço! A pontualidade e o profissionalismo são impecáveis. Adoro a flexibilidade e a atenção aos detalhes. Com certeza continuarei usando!"
						</p>
					</div>
					<div className="testimonial-item p-4 my-5">
						<i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
						<div className="d-flex align-items-end mb-4 round-button">
							<img className="img-fluid flex-shrink-0 round-button" src="assets/img/testimonial-3.jpg" style={{ width: '80px', height: '80px' }} alt="testimonial-4" />
							<div className="ms-4">
								<h5 className="mb-1">Carlos Almeida</h5>
								<p className="m-0">Gerente</p>
							</div>
						</div>
						<p className="mb-0">
							"Uso este serviço para minhas viagens de negócios e pessoais, e sempre sou atendido com a maior eficiência e cortesia. A qualidade é realmente excelente!"
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
