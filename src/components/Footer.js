import React from "react";

const Footer = () => {
  return (
    <div class="footer">
      <p>
        <a class="copyright">&copy; 2020 Vincent McGargill</a> 
      </p>
      <p>
      Email: <a class="email" id="email" href="mailto:vincentmcgargill@gmail.com">vincentmcgargill@gmail.com</a>
      </p>
      <p>
        <a href="https://github.com/vmcgargill" class="github" target="_blank">GitHub</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/vincent-mcgargill-b6244660/" class="linkedin" target="_blank">LinkedIn</a>
      </p>
      <p>
        <a href="https://vmcgargill.github.io/portfolio/" class="portfolio" target="_blank">Portfolio</a>
      </p>
    </div>
  )
}

export default Footer;