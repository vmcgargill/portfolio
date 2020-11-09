import React from "react";

const Resume = () => {
  return (
    <div class="resume">
      <h1>Resume</h1>
      <h2 class="resumetitle">Vincent J. McGargill</h2>
      <h2 class="resumetitle">VincentMcGargill@gmail.com | 720-579-3821 | Aurora, CO 80017</h2>
      <h2 class="resumetitle"><a href="https://vmcgargill.github.io/portfolio/" class="blue" target="_blank">Website Portfolio</a> | <a href="https://github.com/vmcgargill" class="blue" target="_blank">GitHub Profile</a> | <a href="https://www.linkedin.com/in/vincent-mcgargill-b6244660/" class="blue" target="_blank">LinkedIn Profile</a></h2>
      <h2 class="bold">
        Goals, Skills, Experience, Qualifications, and Projects
      </h2>
      <ul>
        <li>Goal is to pursue a career in software development.</li>
        <li>Skills include team collaboration, time management, interpersonal, customer service, and innovation.</li>
        <li>Expert Microsoft Office skills and experience from over five years of working with Microsoft Word, Excel, PowerPoint, Outlook, OneDrive, and Skype for Business.</li>
        <li>Strong computer and tech skills from working in IT with app development, desktop support ticketing, Linux server administration, computer staging, and Active Directory for two years. Languages and experience include Java, JavaScript, Python, JSON, SQL, databases, HTML, CSS, XML, PHP, jQuery, Node.js, and C#.</li>
        <li>Projects completed include Android and desktop cross platform bulletin board, PHP version app update, password generator, weather dashboard, meal search engine, programming quiz, and responsive websites.</li>
      </ul>
      <h2 class="bold">Education and Certificates</h2>
      <h2 class="education">University of Colorado Denver | Bachelor of Science in Business Administration and Management | Graduated: 12/15/2018</h2>
      <h2 class="education">University of Denver | Coding Bootcamp Full Stack Development Certificate | In progress, will graduate 12/16/2020.</h2>
      <h2 class="bold">Professional Experience</h2>
      <h2 class="experience">Order Management Specialist | Dreamstyle Remodeling | Englewood, CO | May 2019 – March 2020</h2>
      <ul>
        <li>Received and updated order quotes for door and window orders according to new measurements, change orders, and email confirmations from customers.</li>
        <li>Reviewed orders, prevented mistakes, and proposed change orders when problems were encountered.</li>
        <li>Ordered doors and windows after the approval process. Tracked all of the company orders until they were delivered at the warehouse. Notified team of all the new orders received at warehouse for scheduling.</li>
      </ul>
      <h2 class="experience">Desktop Support IT Intern | Academic Impressions | Denver, CO | February 2018 – February 2019</h2>
      <ul>
        <li>Updated company application to PHP 7.</li>
        <li>Fixed employee support user issues with Microsoft Word, Outlook, PowerPoint, Skype for Business, Excel, Windows 10, and Adobe products extensively.</li>
        <li>Prepared office computers for employees, installed and updated software to the latest versions, approved software installs, fixed printer issues, and administered for Active Directory.</li>
        <li>Technical experience with PHP, CentOS 7, NGINX, computer, and server maintenance.</li>
      </ul>
      <h2 class="experience">IT Technician | Green Cross Colorado | Denver, CO | October 2016 - November 2017</h2>
      <ul>
        <li>Built a bulletin board app on desktop and Android mobile.</li>
        <li>Prepared office computers for employees, installed software, and fixed printer issues.</li>
        <li>Technical experience with Python, Java, JavaScript, JSON, CSS, HTML, XML, SQLAlchemy, Postgres databases, Android app development, and Linux servers.</li>
      </ul>
      <h2 class="experience">Service Agent | Enterprise Rent-A-Car | Denver, CO | July 2015 – October 2016</h2>
      <ul>
        <li>Cleaned, detailed, and prepared rental cars for customers. Replenished windshield wiper fluid.</li>
        <li>Provided proficient customer service experience, chauffeured customers in the downtown area, transported vehicles, and changed car tires.</li>
      </ul>
      <h2 class="experience">Student Hourly | National Veterans Training Institute | Denver, CO | October 2013 – June 2015</h2>
      <ul>
        <li>Supported administrator and staff on various office duties such as answering the phone, data entry, printing course materials, and mailing/shipping course materials to international locations.</li>
        <li>Assembled and organized student information packets including customized letters and name badges while utilizing a high sense of attention to detail.</li>
        <li>Prepared and organized classrooms for on-site training sessions, placed student packets on desk, and set up classrooms for positive customer experience.</li>
      </ul>
      <h2 class="bold">Download a copy of my resume by clicking the icon below:</h2><br/><br/>
      <a href="Vincent McGargill Resume 2020.pdf" download target="_blank">
        <img src="DocIcon.png" alt="doc icon" id="docicon"></img>
      </a>
    </div>
  )
}

export default Resume;