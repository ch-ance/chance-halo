import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import NavBar from "./NavBar"

const Header = () => {
  return (
    <header id="chance-halo">
      {/* <NavBar /> */}
      <h1>Chance Embrey-Farquhar</h1>
      <h2>Software Engineer</h2>
      <h3>
        This portfolio site is under active construction! Reach me anywhere
        below to see what else I'm working on.
      </h3>
      <ul className="contact-links">
        <li>
          <a href="tel:+18163856369">
            <FontAwesomeIcon icon={faMobileAlt} />
          </a>
        </li>
        <li>
          <a href="mailto:cembreyfarquhar@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/cembreyfarquhar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chance-embrey-farquhar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
