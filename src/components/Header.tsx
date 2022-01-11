import { useState } from "react";
import Fade from "react-reveal/Fade";

type HeaderProps = {
  name: string;
  headerParagraph: string;
  headerTagline: string[];
  contactEmail: string;
};

const Header = ({
  name,
  headerParagraph,
  headerTagline,
  contactEmail,
}: HeaderProps) => {

  const [darkmode, setDarkMode] = useState(false);

  const handleClick = () => {
    if (darkmode) setDarkMode(false);
    else setDarkMode(true);
  };

  return (
    <i className="section" id="home">
      <i className="container">
        <i className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {name} and this is my website.
              {" " + new Date().getTimezoneOffset() + " "}
              <span role="img" aria-label="Emoji">
                ( emoji )
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <i className="heading-wrapper">
              <h1>
                {headerTagline[0] ? headerTagline[0] : "Building digital"}
              </h1>
              <h1>
                {" "}
                {headerTagline[1] ? headerTagline[1] : "products, brands"}
              </h1>
              <h1> {headerTagline[2] ? headerTagline[2] : "and experience"}</h1>
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

            <h2>The darkmode is {`${darkmode}`} now</h2>
            <button onClick={handleClick}>Change Mode</button>
          </Fade>
        </i>
      </i>
    </i>
  );
};

export default Header;
