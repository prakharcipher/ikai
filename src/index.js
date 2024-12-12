import React from 'react';
import ReactDOM from 'react-dom/client';
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import logo from './ikai_logo.png';
import About from "./components/About";
import Contact from "./components/Contact";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {isMobile} from 'react-device-detect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='navbar'>
        <Link to="/" className='logo'>
          <img alt="logo" src={logo} />
        </Link>
        <div className='nav-container'>          
          {!isMobile && <div className='nav-item'>
            <Link to="/">Home</Link>
          </div>}
          {!isMobile && <div className='nav-item'>
            <Link to="/projects">Projects</Link>
          </div>}
          <a href="https://wa.me/918979972550" target="_blank" className='nav-item action'>
            <FaWhatsapp />     
            <div>Talk to Us</div>
          </a>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>     
    </BrowserRouter>    
  </React.StrictMode>
);

reportWebVitals();
