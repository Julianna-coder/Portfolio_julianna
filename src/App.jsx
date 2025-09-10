import React from 'react';
import { useState } from 'react-dom';
import './App.css';
import Accueil from './Monsite/Accueil';
import Apropos from './Monsite/Apropos';
import Competences from './Monsite/Competences';
import Portfolio from './Monsite/Portfolio';
import Contact from './Monsite/Contact';
import Footer from './Monsite/Footer';


function App() {
  return (
    <>
      <Accueil/>
      <Apropos/>
      <Competences/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;