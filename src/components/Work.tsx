import React from "react";
import Card from "./atoms/Card";
import Fade from "react-reveal/Fade";
import "./Works.scss";
import data from "../yourdata";
import { Link as button, Navigate, useNavigate } from "react-router-dom";
import ListofCards from "./ListofCards";

const Work = () => {
  const navigate = useNavigate();
  return (
    <i className="section" id="work">
      <Fade bottom>
        <h1>Work</h1>
      </Fade>

      <ListofCards />

      <button
        onClick={() => navigate("/projects#work")}
        className="button-50"
        role="button"
      >
        Show More Projects
      </button>
    </i>
  );
};

export default Work;
