import logo from './logo.svg';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <About />
    </>
  );
}

export default App;
