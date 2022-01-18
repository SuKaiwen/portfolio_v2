import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

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
    </>
  );
}

export default App;
