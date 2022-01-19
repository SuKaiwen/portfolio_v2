import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';

import React, {useEffect} from 'react';

import './css/Global.css';

function App() {

  

  return (
    <>
      <NavBar />
      <LandingPage />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
