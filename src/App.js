import logo from './ikai_logo.png';
import { PiInstagramLogoThin } from "react-icons/pi";
import slide1 from "./slide1.JPG";
import { Link } from 'react-router-dom';
import { CiLinkedin } from "react-icons/ci";
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <div className='logo'>
          <img alt="logo" src={logo} />
        </div>
        <div className='nav-container'>          
          <div className='nav-item'>
            <Link to="/">home</Link>
          </div>
          <div className='nav-item'>
            <Link to="/projects">projects</Link>
          </div>
          <div className='nav-item'>
            <Link to="/projects">about us</Link>
          </div>
          <div className='nav-item'>
            <Link to="/projects">contact us</Link>
          </div>
          <div className='nav-item-socials'>
            <div className='social'>
              <PiInstagramLogoThin style={{width: '20px', height: '20px'}} />
            </div>
            <div className='social'>
              <CiLinkedin style={{width: '20px', height: '20px'}} />
            </div>
          </div>
        </div>
      </div>
      <div className='carousel'>
        <img alt="slide" src={slide1} />
      </div>
    </div>
  );
}

export default App;
