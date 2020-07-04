import React from 'react';
import './App.css';
import Heading from './components/common/Heading';
import Banner from './components/common/Banner';
import Services from './components/common/Services';
import AboutUs from './components/common/AboutUs';
import Testimonials from './components/common/Testimonials';
import Footer from './components/common/Footer';

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
