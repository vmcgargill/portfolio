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
            <h2 class="bold">Email:</h2>
            <h2 href="mailto:vincentmcgargill@gmail.com">vincentmcgargill@gmail.com</h2>
            <h2 class="bold">Work Email:</h2>
            <h2>N/A</h2>
            <h2 class="bold">School Email:</h2>
            <h2 href="mailto:vincent.mcgargill@du.edu">vincent.mcgargill@du.edu</h2>
            <h2 class="bold">Cell Phone:</h2>
            <h2 class="blue">(720)-579-3821</h2>
            <h2 class="bold">Work phone:</h2>
            <h2 class="bold">N/A</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;