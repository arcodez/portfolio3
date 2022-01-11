import Layout from "../components/layout";
import SEO from "../components/seo";
// Components
import Header from "../components/Header";
import Work from "../components/Work";
import About from "../components/about";
import Skills from "../components/skills";
import Promotion from "../components/Promotion";
import Footer from "../components/Footer";
import data from "../yourdata";

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Portfolio /Template" /> */}
    <Header {...data} />
    <Work />
    <About />
    <Skills />
    <Promotion />
    <Footer />
  </Layout>
);

export default IndexPage;
