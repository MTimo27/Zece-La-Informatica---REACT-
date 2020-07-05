import React from 'react';
import './App.css';
import Heading from './components/common/Heading';
import Banner from './components/core/Banner';
import Services from './components/core/Services';
import AboutUs from './components/core/AboutUs';
import Testimonials from './components/core/Testimonials';
import Footer from './components/core/Footer';

function App() {
  return (
    <React.Fragment>
      <Heading />
      <Banner />
      <Services />
      <AboutUs />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
}

export default App;
