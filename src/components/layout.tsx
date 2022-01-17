import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/mains.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
