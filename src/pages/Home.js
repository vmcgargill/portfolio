import React from "react";

const Home = () => {
  return (
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-8">
        <div class="row">
          <div class="home" id="Welcome">
            <h1>Welcome</h1>
            <h2>Welcome to my portfolio! Thank you for visiting. 
              Feel free to look around by using the navigation bar at the top of the screen. 
              Be sure to check out the About Me page and the Resume page if you want to know
              more about who I am and my current work experience.</h2>
          </div>
        </div>
        <div class="row">
          <div class="home">
              <h1>About This Portfolio</h1>
              <h2>
                Please check out the Apps section of this portfolio to view applications and games that I have built 
                as a demonstration of my skills, knowledge and abilities. Have a look around as 
                I slowly add new features to my own portfolio!
              </h2>
            </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4">
        <div class="row">
          <div class="home" id="SideNav">
            <h1 class="bold">Contact Info:</h1>
            <h5 class="bold">Email:</h5>
            <p><a href="mailto:vincentmcgargill@gmail.com" class="blue">vincentmcgargill@gmail.com</a></p>
            <h5 class="bold">LinkedIn:</h5>
            <p><a href="https://www.linkedin.com/in/vincent-mcgargill-b6244660/" target="_blank" class="blue">https://www.linkedin.com/in/vincent-mcgargill-b6244660/</a></p>
            <h5 class="bold">GitHub:</h5>
            <p><a href="https://github.com/vmcgargill" target="_blank" class="blue">https://github.com/vmcgargill</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;