// src/components/Fact.js
import React from 'react';

const Fact = () => (
  <div className="container-xxl py-5" id="fact">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase mb-3">Fatos Importantes</h6>
          <h1 className="mb-5">A escolha certa para suas viagens particulares</h1>
          <p className="mb-5">
            Com mais de 5 mil viagens realizadas ao longo de 8 anos de experiência, RLCO Transporte Particular é sinônimo de rapidez, confiança e pontualidade. Nosso objetivo é oferecer um serviço personalizado e de alta qualidade para atender todas as suas necessidades de transporte.
          </p>
          <div className="d-flex align-items-center">
            <a href="https://wa.me/5541998765432" target="_blank" rel="noopener noreferrer" className="whatsapp-link round-button">
              <i className="fab fa-whatsapp fa-2x flex-shrink-0 p-3 text-white round-button"></i>
            </a>

            <div className="ps-4">
              <h6>Entre em contato para qualquer dúvida!</h6>
              <h3 className="text-primary m-0">(41) 9.9926-1909</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row g-4 align-items-center">
            <div className="col-6 text-center wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-4 text-primary" data-toggle="counter-up">5,000+</h1>
              <h6 className="text-uppercase">Viagens realizadas</h6>
            </div>
            <div className="col-6 text-center wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-4 text-primary" data-toggle="counter-up">8</h1>
              <h6 className="text-uppercase">Anos de experiência</h6>
            </div>
            <div className="col-6 text-center wow fadeIn" data-wow-delay="0.7s">
              <h1 className="display-4 text-primary" data-toggle="counter-up">100%</h1>
              <h6 className="text-uppercase">Satisfação do cliente</h6>
            </div>
            <div className="col-6 text-center wow fadeIn" data-wow-delay="0.9s">
              <h1 className="display-4 text-primary" data-toggle="counter-up">24/7</h1>
              <h6 className="text-uppercase">Disponibilidade</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Fact;
