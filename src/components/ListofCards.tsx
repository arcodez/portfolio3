import React from "react";
import data from "../yourdata";
import Fade from "react-reveal/Fade";
import Card from "./atoms/Card";

const ListofCards = () => {
  return (
    <article>
      <h2>Personals</h2>
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
    </article>
  );
};

export default ListofCards;
