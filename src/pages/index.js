import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import SEO from "../components/seo"
import WorkingOn from "../components/WorkingOn"

const IndexPage = () => (
  <section className="content">
    <SEO
      title="Chance Halo"
      description="Personal site for Chance Embrey-Farquhar"
    />

    {/* Header */}
    <header>
      <h1>Chance Embrey-Farquhar</h1>
      <h2>Full-Stack Web Developer</h2>
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

    {/* Main */}
    <section className="main">
      <section className="topic skills">
        <h3>What Can I Do?</h3>
        <h4>Click a tech to see it in action</h4>
        <ul className="skills-list">
          <li>Javascript</li>
          <li>Java</li>
          <li>Python</li>
          <li>React</li>
        </ul>
        <ul className="skills-list">
          <li>Typescript</li>
          <li>PostgreSQL</li>
          <li>NodeJS</li>
          <li>CSS3</li>
        </ul>
      </section>

      <section className="topic" className="experience">
        <h3>Relevant experience: </h3>
        <ul className="exp-list">
          <li>Lambda School</li>
        </ul>
      </section>

      <footer>
        <span>@Copyright 2019 Chance Embrey-Farquhar</span>
      </footer>
    </section>
  </section>
)

export default IndexPage
