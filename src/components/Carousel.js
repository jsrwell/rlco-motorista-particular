// src/components/Carousel.js
import React from 'react';
import './Carousel.css';

const Carousel = () => (
	<div className="container-fluid p-0 pb-5" id="carousel">
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
			{/* Indicators */}
			<ol className="carousel-indicators">
				<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
				<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
			</ol>

			{/* Carousel Items */}
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className="carousel-image-container">
						<img src="assets/img/gransiena.jpeg" className="d-block w-100" alt="Carousel Slide 1" />
						<div className="overlay"></div>
					</div>
					<div className="carousel-caption d-none d-md-block">
						<h5 className="text-white text-uppercase animated slideInDown">Experiência, pontualidade e conforto</h5>
						<h1 className="display-3 text-white animated slideInDown mb-4">
							O melhor <span className="text-primary">Transporte Particular</span> da região
						</h1>
						<p className="fs-5 fw-medium text-white mb-4 pb-2">
							O melhor para suas necessidades, sempre com o máximo de conforto e segurança.
						</p>
						<a href="#about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Saiba Mais</a>
						<a href="https://wa.me/5541999261909?text=Ol%C3%A1%20RLCO%20Transportes%20Particular%2C%0A%0AGostaria%20de%20realizar%20um%20or%C3%A7amento%20com%20voc%C3%AA." className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Solicite um Orçamento</a>
					</div>
				</div>

				<div className="carousel-item">
					<div className="carousel-image-container">
						<img src="assets/img/curitiba.jpeg" className="d-block w-100" alt="Carousel Slide 2" />
						<div className="overlay"></div>
					</div>
					<div className="carousel-caption d-none d-md-block">
						<h5 className="text-white text-uppercase animated slideInDown">Realizado com Excelência</h5>
						<h1 className="display-3 text-white animated slideInDown mb-4">
							Seu <span className="text-primary">Transporte</span> de confiança em Curitiba
						</h1>
						<p className="fs-5 fw-medium text-white mb-4 pb-2">
							Oferecemos um serviço de transporte rápido e seguro, com motorista experiente e especializado em atender às suas necessidades.
						</p>
						<a href="#about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Saiba Mais</a>
						<a href="https://wa.me/5541999261909?text=Ol%C3%A1%20RLCO%20Transportes%20Particular%2C%0A%0AGostaria%20de%20realizar%20um%20or%C3%A7amento%20com%20voc%C3%AA." className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Solicite um Orçamento</a>
					</div>
				</div>
			</div>

			{/* Controls */}
			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</a>
		</div>
	</div>
);

export default Carousel;
