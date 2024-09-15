import React from 'react'

const Footer = () => {
	return (
		<div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '6rem' }}>
			<div className="container py-5">
				<div className="row g-5">
					<div className="col-lg-3 col-md-6">
						<h4 className="text-light mb-4">Endereço</h4>
						<p className="mb-2">
							<i className="fa fa-map-marker-alt me-3"></i>Curitiba e Região, PR
						</p>
						<p className="mb-2">
							<i className="fa fa-phone-alt me-3"></i>(41) 9.9926-1909
						</p>
						<p className="mb-2">
							<i className="fa fa-envelope me-3"></i>rlcotransporteprivado@gmail.com
						</p>
					</div>
					<div className="col-lg-3 col-md-6">
						<h4 className="text-light mb-4">Serviços</h4>
						<a className="btn btn-link" href="#serviceItems">
							Viagens Corporativas
						</a>
						<a className="btn btn-link" href="#serviceItems">
							Traslados Aeroportuários
						</a>
						<a className="btn btn-link" href="#serviceItems">
							Viagens de Lazer
						</a>
						<a className="btn btn-link" href="#pricing">
							Transporte Sob Medida
						</a>
					</div>
					<div className="col-lg-3 col-md-6">
						<h4 className="text-light mb-4">Acesso Rápido</h4>
						<a className="btn btn-link" href="#about">
							Sobre
						</a>
						<a className="btn btn-link" href="https://wa.me/5541998765432?text=Gostaria%20de%20mais%20informações%20sobre%20os%20Planos.">
							Contato
						</a>
						<a className="btn btn-link" href="#serviceItems">
							Nossos Serviços
						</a>
					</div>

				</div>
			</div>
			<div className="container-fluid copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
							&copy; <a href="#top">RLCO | Transporte Particular</a>, Todos os Direitos Reservados.
						</div>
						<div className="col-md-6 text-center text-md-end">
							Desenvolvido por <a href="https://www.linkedin.com/in/jsrwell/">jsrwell</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
