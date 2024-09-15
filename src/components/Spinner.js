// src/components/Spinner.js
import React, { useEffect } from 'react';
import $ from 'jquery';

const Spinner = () => {
  useEffect(() => {
    const spinner = () => {
      setTimeout(() => {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
        }
      }, 1);
    };
    
    spinner();

    return () => {
    };
  }, []);

  return (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
