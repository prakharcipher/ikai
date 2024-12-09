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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='navbar'>
        <div className='logo'>
          <img alt="logo" src={logo} />
        </div>
        <div className='nav-container'>          
          <div className='nav-item'>
            <Link to="/">Home</Link>
          </div>
          <div className='nav-item'>
            <Link to="/projects">Projects</Link>
          </div>
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
      {/* <div className='footer'>
        <div className='footer-element'>© 2024 Studio Ikai Pvt Ltd</div>
      </div> */}
      
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();