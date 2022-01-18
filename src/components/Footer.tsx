import Fade from "react-reveal/Fade"
import data from "../yourdata"

type FooterProps = {	
  contactSubHeading: string,
  contactEmail: string;
  social: [];
}
const Footer = ({}) => {
  return (
    <i className="section" id="contact">
      <i className="container">
        <i className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <i className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </i>
          <span>
            Made With <i>❤</i> by
            <a href="#"> Abel Rodriguez</a>
          </span>
        </i>
      </i>
    </i>
  )
}

export default Footer
