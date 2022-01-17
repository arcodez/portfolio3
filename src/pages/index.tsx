import Layout from "../components/layout";
import SEO from "../components/seo";
// Components
import Header from "../components/Header";
import Work from "../components/Work";
import About from "../components/about";
import Skills from "../components/skills";
import Promotion from "../components/Promotion";
import data from "../yourdata";
import { useEffect } from "react";

const IndexPage = () => {
  useEffect(() => {
    const colorVar = () => {};
  }, []);

  //create a function to setColor to a varible off css
  const setColor = () => {
    document.documentElement.style.setProperty('--color-text', 'black');
    document.documentElement.style.setProperty('--body-background', 'white');
  };

  return (
    <Layout>
      {/* <SEO title="Portfolio /Template" /> */}
      <Header {...data} />
      <button onClick={setColor}>Change color Text</button>
      <Work />
      <About />
      <Skills />
      <Promotion />
    </Layout>
  );
};

export default IndexPage;
