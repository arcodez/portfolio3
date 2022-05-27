import React from "react";
import Card from "./atoms/Card";
import Fade from "react-reveal/Fade";
import "./Works.scss";
import data from "../yourdata";
import { Navigate, useNavigate } from "react-router-dom";
import ListofCards from "./ListofCards";

const Work = () => {
  const navigate = useNavigate();
  return (
    <i className="section" id="work">
      <i className="container">
        <i className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <ListofCards />

          <button onClick={() => navigate("/projects")}>
            Show More Projects
          </button>
        </i>
      </i>
    </i>
  );
};

export default Work;
