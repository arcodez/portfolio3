import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <i className="section" id="work">
      <i className="container">
        <i className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <i className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </i>
        </i>
      </i>
    </i>
  )
}

export default Work
