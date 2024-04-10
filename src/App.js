import React from 'react';

import { Footer, Blog,Possibility, Features, Whatgodgonecrazy, Header } from './containers';
import { CTA, Brand,Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgodgonecrazy />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
      <Blog />
      
    </div>
  );
}

export default App;
