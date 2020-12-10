import React from "react";
import { Link } from "react-router-dom"

const AboutMe = () => {
  return (
    <div class="AboutMe">
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-3"><img src="Picture1.png" alt="Profile pic"></img></div>
          <div class="col-sm-12 col-md-12 col-lg-9" id="aboutmepic">
            <h1>About Me:</h1>
            <p>
              To tell you more about myself, with my career I want to become a software developer. 
              I have 2 years of previous experience working in IT while I was in college. I also have 
              over five years of experience working in an office setting. To add to my experience, 
              I graduated college at the University of Colorado Denver with a Bachelor of Science in 
              Business Administration Management. I completed the University of Denver Coding Bootcamp 
              where I am learning even more code writing skills. In the University of Denver Coding Bootcamp, 
              I learned how to work with others on the same coding projects, how to develop both front end and backend, 
              and how to learn new skills, languages, or frameworks on the fly. 
            </p>
            <p>
              One of my favorite hobbies is writing code as it is my dream job; the type of job I would do for free. 
              If you would like to see examples of my code, please check out the <Link class="blue" to={"/apps"}>app section</Link> of my portfolio and 
              my <a class="blue" href={"https://github.com/vmcgargill"}>GitHub account</a> which is linked in the portfolio as well.
            </p>
            <p>
              My consider myself to be a strong candidate as my experience includes: JavaScript, HTML, CSS, Bootstrap, React, jQuery, NodeJS, PassportJS,
              Java, Python, MongoDB, MySQL, PostgreSQL, XML, PHP, Git, NGINX Servers, Express Servers, Linux: (Ubuntu, CentOS), email servers (Postfix & Dovecot),
              Windows 10, Office Suite, Active Directory, Microsoft Exchange, Wod, Excel, Skype for Business, and Powerpoint.
            </p>
          </div>
      </div>
    </div>
  )
}

export default AboutMe;