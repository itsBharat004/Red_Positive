import React from 'react'
import './AboutStyle.css'
import GenericCompo from './GenericCompo'
const About = () => {
  return (
    <div className='about' id='about'>
        {/* top container */}
        <div className="aboutTopContainer">
        
      <h1 className='aboutHeading' > 
      <span className='aboutHeadingText'>
      <span className='aboutHighlight'>About</span>
       the company
      </span>
   
      <div className="navbarLogo aboutNavbarLogo">
        <div id="navLogo1" className="showNavLogo"></div>
        <div id="navLogo2" className="showNavLogo"></div>
       
        </div>
      </h1>
      <h1 className='aboutHeadings'>‘To satisfy the customer is the mission and
the purpose of every company ’</h1>
        </div>
        {/* bottom container */}
        <div className="bottomTopContainer">
        <GenericCompo value={{rightToLeft:true , imgSrc:"https://www.redpositive.in/images/mission_gif.gif",title:"Mission",dec:"To provide cutting-edge technology solutions to the defense, healthcare, IT, and AI industries. To foster innovation, collaboration, and growth within these industries through the development of forward-thinking products and services. To deliver exceptional customer service and support that exceeds expectations."}}/>
        <h1 className='aboutHeadings'>‘When there is a vision there is a hope’</h1>
        <GenericCompo value={{rightToLeft:false , imgSrc:"https://www.redpositive.in/images/vision_gif.gif",title:"Vision",dec:"To be a trusted and reliable partner for the defense, healthcare, IT, and AI industries, delivering innovative and effective technology solutions. To inspire progress and advancement within these sectors through the development of groundbreaking products and services. To establish long-term relationships with our customers and partners based on trust, collaboration, and mutual success."}}/>

        </div>

    </div>
  )
}

export default About
