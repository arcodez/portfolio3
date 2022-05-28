import Layout from "../components/layout";
// Components
import Header from "../components/Header";
import Work from "../components/Work";
import About from "../components/about";
import Skills from "../components/skills";
import Promotion from "../components/Promotion";
import data from "../yourdata";
import useDarkMode from "../hooks/useDarkMode";
import ThemeChanger from "../components/ThemeChanger";

const IndexPage = () => {
  return (
    <Layout>
      <Header {...data} />
      <br />
      {/* <h2 style={{ textAlign: "center" }}>the dark mode is {`${darkmode}`}</h2> */}
      <Work />
      <About />
      <Skills />
      <Promotion />
    </Layout>
  );
};

export default IndexPage;
