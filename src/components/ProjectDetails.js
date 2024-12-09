import React from 'react'
import { useParams } from 'react-router-dom';
import thumb1 from "./thumb1.jpg";
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
                    <div className='project-title'><span className='primary'>{projects[id].name}</span>, <span className='secondary'>{projects[id].location}</span></div>
                    <div className='project-data'>Project Data</div>
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
                    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={true}>
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
                <div className='content-title'>Description</div>
                {projects[id].desc.map((para) => {
                    return (
                        <div className='paragraph'>{para}</div>
                    )
                })}
            </div>      
        </div>
    )
}