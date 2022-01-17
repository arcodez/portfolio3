import Layout from "../components/layout";
import SEO from "../components/seo";
// Components
import Header from "../components/Header";
import Work from "../components/Work";
import About from "../components/about";
import Skills from "../components/skills";
import Promotion from "../components/Promotion";
import data from "../yourdata";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    handleThemeMode();
  }, [darkmode]);

  const handleThemeMode = () => {
    if (darkmode) return setColorToLight();
    if (!darkmode) return setColorToDark();
  };

  const handleThemeActive = () => {
    if (darkmode) setDarkMode(false);
    else setDarkMode(true);
  };

  const changesProperty = (property: string, value: string): void => {
    document.documentElement.style.setProperty(property, value);
  };

  //create a function to setColor to a varible off css
  const setColorToLight = () => {
    changesProperty("--color-text", "black");
    changesProperty("--body-background", "white");
  };

  const setColorToDark = () => {
    changesProperty("--color-text", "#fff");
    changesProperty("--body-background", "black");
  };

  return (
    <Layout>
      <Header {...data} />
      <br />
      <h2 style={{ textAlign: "center" }}>the dark mode is {`${darkmode}`}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <button onClick={handleThemeActive}>Change Theme mode</button>
      </div>

      <Work />
      <About />
      <Skills />
      <Promotion />
    </Layout>
  );
};

export default IndexPage;
