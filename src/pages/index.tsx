import Layout from "../components/layout";
// Components
import Header from "../components/Header";
import Work from "../components/Work";
import About from "../components/about";
import Skills from "../components/skills";
import Promotion from "../components/Promotion";
import data from "../yourdata";
import useDarkMode from "../hooks/useDarkMode";

const IndexPage = () => {
  const { darkmode, handleThemeActive } = useDarkMode();

  return (
    <Layout>
      <Header {...data} />
      <br />
      {/* <h2 style={{ textAlign: "center" }}>the dark mode is {`${darkmode}`}</h2> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <div className="theme_change">
          <i onClick={handleThemeActive} className={`fas fa-toggle-${darkmode ? "on" : "off"} theme_btn`}></i>

          {darkmode ? (
            <img src="https://bordados.vercel.app/sun.svg" alt="" />
          ) : (
            <img src="https://bordados.vercel.app/moon.svg" alt="" />
          )}

        </div>
      </div>

      <Work />
      <About />
      <Skills />
      <Promotion />
    </Layout>
  );
};

export default IndexPage;
