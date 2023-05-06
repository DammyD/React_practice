import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className="container">
        <div className="title">
        <h2>About</h2>
        </div>
        <div className="about-container">
        <p>My name is Blessing. I am a Nigerian. I am a student of Software Engineering at Stutern Accelerate program. I love to watch Animes and ...</p>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
                    <NavLink to='/about/career'>My Career</NavLink>
                    <NavLink to='/about/education'>My Education</NavLink>
                </nav>

                {/* The <Outlet> element is used as a placeholder for rendering child components  */}
                <Outlet />
            </div>
        </div>
  )
}

export default About