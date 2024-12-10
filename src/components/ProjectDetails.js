import React from 'react'
import { useParams } from 'react-router-dom';
import "./projectdetails.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projects from './projectData';

export default function ProjectDetails() {

    const { id } = useParams();

    return (
        <div className='projects-details-container'>
            <div className='details-container'>
                <div className='information'>
                    <div className='project-title'><span className='primary'>{projects[id].name}</span></div>
                    <div className='detail-row first'>
                        <div className='header'>Location</div>
                        <div className='value'>{projects[id].location}</div>
                    </div>
                    <div className='detail-row'>
                        <div className='header'>Year</div>
                        <div className='value'>{projects[id].year}</div>
                    </div>
                    <div className='detail-row'>
                        <div className='header'>Type</div>
                        <div className='value'>{projects[id].type}</div>
                    </div>
                    <div className='detail-row'>
                        <div className='header'>Size</div>
                        <div className='value'>{projects[id].size}</div>
                    </div>
                </div>
                <div className='images'>
                    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} useKeyboardArrows={true}>
                        {projects[id].images.map((image) => {
                            return (
                                <div className="image-container">
                                    <img src={image} alt="image" />                                    
                                </div>
                            )
                        })}                        
                    </Carousel>
                </div>
            </div>                       
            <div className='content'>
                <div className='left'></div>
                <div className='right'>
                    {projects[id].desc.map((para) => {
                        return (
                            <div className='paragraph'>{para}</div>
                        )
                    })}
                </div>                
            </div>      
        </div>
    )
}