import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="l-wrapper">
          <div className="box-1">
            <h1>KEVIN SU</h1>
            <h1 className="section-number">01</h1>
          </div>
          <div className="box-2">
            <h2>CONNECT ON</h2>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h1><i class="fab fa-linkedin"></i> - <i class="fab fa-github"></i> - <i class="fas fa-envelope"></i></h1>
          </div>
        </div>
        <div className="landing">
          <div className="row">
          </div>
          <div className="row">
            <h2>HELLO | 你好 | こんにちは</h2>
            <h1>WELCOME TO MY PORTFOLIO</h1>
            <h2>Frontend Developer / Software Engineer - Sydney, Australia</h2>
            <div className="col"></div>
            <div className="col">
              <p>Hi I'm Kevin, a recent graduate from The University of Sydney. I am passionate about seeking new challenges and finding solutions to problems. I like to create create solid and scalable frontend products with great user experiences.</p>
            </div>
            <button className="button">LEARN MORE <i class="fas fa-arrow-right"></i></button>
          </div>
          <div className="row">
          </div>
        </div>
      </div>
    </>
    
    
  );
}

export default App;
