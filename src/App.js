import slide1 from "./slide1.JPG";
import slide2 from "./slide2.jpeg";
import slide3 from "./slide3.jpeg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.JPG";
import pranaya from "./pranaya.png";
import arushi from "./arushi.png";
import { CiLinkedin } from "react-icons/ci";
import dlf from "./dlf.png";
import mahindra from "./mahindra.png";
import { PiInstagramLogoThin } from "react-icons/pi";
import saffron from "./saffron.png";
import samsara from "./samsara.png";
import camelias from "./camelias.png";
import { FaUsersRays } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { MdVerifiedUser } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './App.scss';

function App() {

  const handleMail = () => {
    window.location.href = "studioikai24@gmail.com";
  }

  return (
    <div className="app">
      <div className='carousel'>
        {/* <img alt="slide" src={slide1} /> */}
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false} showStatus={false}>
            <div className="image-container">
                <img src={slide5} />               
            </div>
            <div className="image-container">
                <img src={slide2} />                
            </div>
            <div className="image-container">
                <img src={slide3} />                
            </div>
            <div className="image-container">
                <img src={slide1} />                
            </div>
            <div className="image-container">
                <img src={slide4} />
                {/* <p className="legend">
                  <div className="title">Serenity Haven</div>
                  <div className="button">See Details</div>
                </p> */}
            </div>
        </Carousel>
      </div>
      <div className='about-container'>
        <div className='title'>Meet The Founders</div>
        <div className='team-container'>
          <div className='member'>
            <div className='photo'>
              <img alt="profile" src={pranaya} />
            </div>
            <div className='profile'>
              <div>Architect</div>
            </div>
            <div className='college'>Aayojan School of Architecture</div>
            <div className='companies'>5+ years experienced</div>
          </div>
          <div className='member'>
            <div className='photo'>
              <img alt="profile" src={arushi} />
            </div>
            <div className='profile'>
              <div>Interior Designer</div>
            </div>
            <div className='college'>CEPT University</div>
            <div className='companies'>4+ years experienced</div>
          </div>
        </div>
      </div>
      <div className='customer-container'>
        <div className='title'>Our <span>Valued</span> Customers</div>
        <div className='banner'>
          <div className='row1'>
            <img alt="property" src={dlf} />
            <img alt="property" src={mahindra} />
            <img alt="property" src={saffron} />
          </div>
          <div className='row2'>
            <img alt="property" src={samsara} />
            <img alt="property" src={camelias} />
          </div>
        </div>
      </div>
      <div className='choose-container'>
        <div className='title'>Why Choose Us</div>
        <div className='values'>
          <div className='value-item'>
            <div className='infographic'>
              <FaUsersRays />
            </div>
            <div className='value-title'>Client-Centric</div>
            <div className='desc'>We work closely with you to bring your vision to life</div>
          </div>
          <div className='value-item'>
            <div className='infographic'>
              <HiLightBulb />
            </div>
            <div className='value-title'>Innovative</div>
            <div className='desc'>Fresh ideas infused with the latest trends and technologies</div>
          </div>
          <div className='value-item'>
            <div className='infographic small'>
              <MdVerifiedUser />
            </div>
            <div className='value-title'>Expertise</div>
            <div className='desc'>Wroked with industry's top architects and designers</div>
          </div>
          <div className='value-item'>
            <div className='infographic small'>
              <BsClockFill />
            </div>
            <div className='value-title'>On-Time</div>
            <div className='desc'>Your project, on time and within budget</div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-container'>
          <div className='copyright'>© 2024 Studio Ikai Pvt Ltd</div>
          <div className='footer-right'>
            <div className='socials'>
              <PiInstagramLogoThin />
              <CiLinkedin />
            </div>
            <div className='hello' onClick={handleMail}><span className='caption'>Say hello!</span> studioikai24@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
