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

    {/* Header */}
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

    {/* Main */}
    <section className="main">
      <section className="topic" id="objective">
        <h2>What I'm up to</h2>
        <div className="update-container">
          <div className="update-box"> Some stuff</div>
          <div className="update-box"> Other stuff</div>
        </div>
      </section>
      <section className="topic" id="skills">
        <h2>Technical Skills:</h2>
        <ul id="skills-list">
          <li>Javascript</li>
          <li>Java</li>
          <li>Python</li>
          <li>React</li>
        </ul>
        <ul id="skills-list">
          <li>Typescript</li>
          <li>PostgreSQL</li>
          <li>NodeJS</li>
          <li>CSS3</li>
        </ul>
      </section>

      <section className="topic" id="experience">
        <h2>Relevant experience: </h2>
        <ul id="exp-list">
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
