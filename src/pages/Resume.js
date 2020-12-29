import React from 'react';

const Resume = () => {

  return (
    <div className="resume">
      <h2 class="bold">You can download a PDF copy of my resume by clicking the icon below:</h2><br/>
      <a href="Vincent McGargill Resume 2021.pdf" download target="_blank">
        <img src="DocIcon.png" alt="doc icon" id="docicon"></img>
      </a><br/>
      <iframe className="resumeDoc" src="https://docs.google.com/document/d/e/2PACX-1vT6p8TWFYVQA2Xzpm2UZRbob8VMfolLUoI0awpft6ovuYTtlEtp0a9T5SH134Yzpg7vTNGZLdRrWDbF/pub?embedded=true"></iframe>
    </div>
  )
}

export default Resume;