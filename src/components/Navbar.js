import React from 'react';

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
      <a onClick={() => handleScroll('home')} className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5" style={{ cursor: 'pointer' }}>
        <h2 className="mb-2 text-white">RLCO | Transporte Particular</h2>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a onClick={() => handleScroll('top')} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Sobre</a>
          <a onClick={() => handleScroll('serviceItems')} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Serviços</a>
          <a onClick={() => handleScroll('princing')} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Preços</a>
          <a onClick={() => handleScroll('team')} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Time</a>
          <a onClick={() => handleScroll('testmonial')} className="nav-item nav-link" style={{ cursor: 'pointer' }}>Relatos</a>
        </div>
        <h4 className="m-0 pe-lg-5 d-none d-lg-block">
          <i className="fa fa-headphones text-primary me-3"></i>(41) 9.9926-1909
        </h4>
      </div>
    </nav>
  );
};

export default Navbar;
