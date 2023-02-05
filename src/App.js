import React from 'react'
import { Header, Blog, Features, Possibility, WhatGPT3, Footer } from './containers';
import { CallToAction, Brand, Navbar } from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
}

export default App