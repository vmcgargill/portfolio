import React from "react";
import { Link } from "react-router-dom"

const AboutMe = () => {
  return (
    <div class="AboutMe">
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-3"><img src="Picture1.png" alt="Profile pic"></img></div>
          <div class="col-sm-12 col-md-12 col-lg-9" id="aboutmepic">
            <h1>Brand Statement:</h1>
            <p>I am an ambitious Full Stack Developer leveraging a background in business, IT, and Order Management. 
              I also have obtained a Bachelor of Science Degree in Business Administration Management at the University of 
              Colorado Denver and a Full-Stack Developer Certificate at the University of Denver. I have a wide variety of 
              technical skills that include JavaScript, Java, Python, HTML, CSS, XML, SQL Databases, MongoDB databases, Express, 
              NGINX, Node.js, React.js, and jQuery. I have work and school experience collaborating in teams on Software Development 
              projects using a wide variety of technologies and languages. I enjoy working in teams and collaborating to solve issues 
              and to build apps that are user friendly. I plan to use my background in IT and business management to create software that improves processes.</p>
          </div>
      </div>
    </div>
  )
}

export default AboutMe;