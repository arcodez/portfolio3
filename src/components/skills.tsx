import React from "react";
import data from "../yourdata";

const Skills = () => {
  return (
    <i className="section">
      <i className="container">
        <i className="skills-container">
          <h1>Skills</h1>
          <i className="skills-grid">
            {data.skills.map((skill, index) => (
              <i className="skill" key={index}>
                {/* <img src={skill.img} alt="css"></img> */}
                <i className={skill.img + " skill_icon"}></i>
                <p>{skill.para}</p>
              </i>
            ))}
          </i>
        </i>
      </i>
    </i>
  );
};

export default Skills;
