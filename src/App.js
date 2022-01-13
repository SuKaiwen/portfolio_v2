import logo from './logo.svg';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Experience from './pages/Experience';

import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <About />
      <Experience />
    </>
  );
}

export default App;
