import React from "react";
import Layout from "./layout";
import ListofCards from "./ListofCards";
import "./Projects.scss";

const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <h1>Projects</h1>

        <ListofCards />
        <ListofCards />
      </div>
    </Layout>
  );
};

export default Projects;
