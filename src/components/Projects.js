import React from 'react'
import "./projects.scss";
import { Link } from 'react-router-dom';
import thumb1 from "./thumb1.jpg";

export default function Projects() {
    return (
        <div className='projects-container'>
            <div className='title'>Projects</div>
            <div className='projects-row-one'>
                <Link to={`/projects/1`} className='project'>
                    <div className='thumb' style={{backgroundImage: `url(${thumb1})`}}></div>
                    {/* <img alt="thumb" src={thumb1} /> */}
                    <div className='name'>Name</div>
                    <div className='location'>Location</div>
                </Link>
                <Link to={`/projects/2`} className='project'>
                <div className='thumb' style={{backgroundImage: `url(${thumb1})`}}></div>
                    <div className='name'>Name</div>
                    <div className='location'>Location</div>
                </Link>
                <Link to={`/projects/3`} className='project'>
                    <div className='thumb' style={{backgroundImage: `url(${thumb1})`}}></div>
                    <div className='name'>Name</div>
                    <div className='location'>Location</div>
                </Link>
            </div>
            <div className='projects-row-two'>
                <Link to={`/projects/4`} className='project'>
                    <div className='thumb' style={{backgroundImage: `url(${thumb1})`}}></div>
                    <div className='name'>Name</div>
                    <div className='location'>Location</div>
                </Link>
                <Link to={`/projects/5`} className='project'>
                    <div className='thumb' style={{backgroundImage: `url(${thumb1})`}}></div>
                    <div className='name'>Name</div>
                    <div className='location'>Location</div>
                </Link>
            </div>
        </div>
    )
}