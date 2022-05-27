import React from "react";
import Layout from "./layout";
import ListofCards from "./ListofCards";
import Work from "./Work";

const Projects = () => {
  return (
    <Layout>
      <div>
        <h1>Projects</h1>

        <ListofCards />
        <ListofCards />
      </div>
    </Layout>
  );
};

export default Projects;
