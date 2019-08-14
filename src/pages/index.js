import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import SEO from "../components/seo"

const IndexPage = () => (
  <section className="content">
    <SEO
      title="Chance Halo"
      description="Personal site for Chance Embrey-Farquhar"
    />

    <header>
      <h1>Chance Embrey-Farquhar</h1>
      <ul id="contact-links">
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
          <a href="https://www.github.com/cembreyfarquhar" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chance-embrey-farquhar/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </header>
  </section>
)

export default IndexPage
