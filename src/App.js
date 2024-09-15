// src/App.js
import React from 'react';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Fact from './components/Fact';
import ServiceItems from './components/ServiceItems';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Quote from './components/Quote';
import Team from './components/Team';
import Testimonial from './components/Testmonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id="top">
      <Spinner />
      <Navbar />
      <Carousel />
      <About />
      <Fact />
      <ServiceItems />
      <Features />
      <Pricing />
      <Quote />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
