import React from "react";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/portfolio/#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio/#/aboutme">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio/#/resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio/#/apps">Apps</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;