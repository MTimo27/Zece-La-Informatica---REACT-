import React from 'react';
import Heading from './components/common/Heading';
import Banner from './components/common/Banner';
import Services from './components/common/Services';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Heading />
      <Banner />
      <Services />
    </React.Fragment>
  );
}

export default App;
