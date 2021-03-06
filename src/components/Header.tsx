import Fade from "react-reveal/Fade";

type HeaderProps = {
  name: string;
  headerParagraph: string;
  contactEmail: string;
};

const Header = ({ name, headerParagraph, contactEmail }: HeaderProps) => {
  return (
    <i className="section" id="home">
      <i className="container">
        <i className="header-wrapper">
          <Fade bottom>
            <h2>Hi, I'm {name} and this is my website.</h2>
          </Fade>
          <Fade bottom cascade>
            <i className="heading-wrapper">
              <h1>{"Building digital"}</h1>
              <h1> {"products, brands"}</h1>
              <h1> {"and experience"}</h1>
            </i>
          </Fade>
          <Fade bottom>
            <p>{headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                contactEmail ? contactEmail : "hello@chetanverma.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </i>
      </i>
    </i>
  );
};

export default Header;
