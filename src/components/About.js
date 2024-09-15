// src/components/About.js
import React from 'react';

const About = () => (
  <div className="container-fluid overflow-hidden py-5 px-lg-0" id='about'>
    <div className="container about py-5 px-lg-0">
      <div className="row g-5 mx-lg-0">
        <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
          <div className="position-relative h-100">
            <img className="position-absolute img-fluid w-100 h-100 round-button ms-1" src="assets/img/ric-limo.jpeg" style={{ objectFit: 'cover' }} alt="" />
          </div>
        </div>
        <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="text-secondary text-uppercase mb-3">Sobre Nós</h6>
          <h1 className="mb-5">Serviço de Transporte Particular com Excelência</h1>
          <p className="mb-5">
            Com mais de 8 anos de experiência e mais de 5 mil viagens realizadas, a <strong>RLCO Transporte Particular</strong>, fundada por Ricardo Leandro da Costa Oliveira, é sinônimo de confiança, pontualidade e profissionalismo. Atuando em Curitiba e região, oferecemos um serviço de transporte particular com a qualidade que você merece.
            <br /><br />
            Ricardo, um motorista altamente capacitado e experiente, já fez parceria com as principais plataformas de transporte como Uber e 99, adquirindo vasta experiência em oferecer um serviço de excelência, sempre com foco na satisfação do cliente. Seja para compromissos diários ou viagens especiais, garantimos um transporte rápido, seguro e confortável.
            <br /><br />
            Nossa missão é proporcionar uma experiência de transporte particular diferenciada, onde cada detalhe é pensado para a sua comodidade e segurança. Contamos com um profundo conhecimento da região, garantindo que você chegue ao seu destino no menor tempo possível, com total tranquilidade.
          </p>
          <a href="#fact" className="btn btn-primary py-3 px-5 round-button">Saiba Mais</a>
        </div>

      </div>
    </div>
  </div>
);

export default About;
