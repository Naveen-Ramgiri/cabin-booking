import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import { DataProvider } from './components/Context'
import Footer from './components/section/Footer';

function App() {

  


  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
      <Footer />
    </DataProvider>
  );
}

export default App;
