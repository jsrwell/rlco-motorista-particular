import React from 'react';

const Navbar = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
      <a onClick={() => handleScroll('home')} className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5" style={{ cursor: 'pointer' }}>
        <h2 className="mb-2 text-white">Logistica</h2>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a onClick={() => handleScroll('home')} className="nav-item nav-link active" style={{ cursor: 'pointer' }}>Home</a>
          <a onClick={() => handleScroll('about')} className="nav-item nav-link" style={{ cursor: 'pointer' }}>About</a>
          <a onClick={() => handleScroll('services')} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Services</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ cursor: 'pointer' }}>Pages</a>
            <div className="dropdown-menu fade-up m-0">
              <a onClick={() => handleScroll('pricing')} className="dropdown-item" style={{ cursor: 'pointer' }}>Pricing Plan</a>
              <a onClick={() => handleScroll('features')} className="dropdown-item" style={{ cursor: 'pointer' }}>Features</a>
              <a onClick={() => handleScroll('quote')} className="dropdown-item" style={{ cursor: 'pointer' }}>Free Quote</a>
              <a onClick={() => handleScroll('team')} className="dropdown-item" style={{ cursor: 'pointer' }}>Our Team</a>
              <a onClick={() => handleScroll('testimonial')} className="dropdown-item" style={{ cursor: 'pointer' }}>Testimonial</a>
              <a onClick={() => handleScroll('error')} className="dropdown-item" style={{ cursor: 'pointer' }}>404 Page</a>
            </div>
          </div>
          <a onClick={() => handleScroll('contact')} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Contact</a>
        </div>
        <h4 className="m-0 pe-lg-5 d-none d-lg-block">
          <i className="fa fa-headphones text-primary me-3"></i>+012 345 6789
        </h4>
      </div>
    </nav>
  );
};

export default Navbar;
