import React from 'react'
import "./projects.scss";
import { Link } from 'react-router-dom';
import projects from './projectData';

export default function Projects() {
    return (
        <div className='projects-container'>
            <div className='title'>Projects</div>
            <div className='projects-row-one'>
                <Link to={`/projects/1`} className='project'>
                    <div className='thumb' style={{backgroundImage: `url(${projects[1].images[0]})`}}></div>
                    {/* <img alt="thumb" src={thumb1} /> */}
                    <div className='name'>Serenity Haven</div>
                    <div className='location'>Bangalore</div>
                </Link>
                <Link to={`/projects/2`} className='project'>
                <div className='thumb' style={{backgroundImage: `url(${projects[2].images[0]})`}}></div>
                    <div className='name'>The Grid House</div>
                    <div className='location'>New Delhi</div>
                </Link>
                <Link to={`/projects/3`} className='project'>
                    <div className='thumb' style={{backgroundImage: `url(${projects[3].images[0]})`}}></div>
                    <div className='name'>The Nukkad Tapri</div>
                    <div className='location'>Dehradhun</div>
                </Link>
            </div>
            <div className='projects-row-two'>
                <Link to={`/projects/4`} className='project'>
                    <div className='thumb' style={{backgroundImage: `url(${projects[4].images[0]})`}}></div>
                    <div className='name'>The Urban Sanctuary</div>
                    <div className='location'>Jaipur</div>
                </Link>
                <Link to={`/projects/5`} className='project'>
                    <div className='thumb' style={{backgroundImage: `url(${projects[5].images[0]})`}}></div>
                    <div className='name'>Ananta</div>
                    <div className='location'>Kurukshetra</div>
                </Link>
            </div>
        </div>
    )
}