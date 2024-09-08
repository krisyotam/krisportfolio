import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
              I’m a Systems Developer and Compiler Engineer, focusing on low-level software and related technologies. 
              In cybersecurity, I work as a Pentester, addressing vulnerabilities and enhancing security. My experience 
              includes solving complex computational problems as an Algorithmic Programmer and improving AI models through 
              Prompt Engineering. I also work in Machine Learning, developing solutions involving data and models, while my background in 
              Microcontroller Programming covers various embedded systems. I apply advanced mathematics in different contexts and bring a 
              minimalistic approach to graphic design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
