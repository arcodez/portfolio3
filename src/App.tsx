import React from "react";
import IndexPage from "./pages/";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
