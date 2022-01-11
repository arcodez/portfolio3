import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <i className="secion" id="about">
      <i className="container">
        <i className="about-section">
          <i className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </i>
          <i className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </i>
        </i>
      </i>
    </i>
  )
}

export default About
