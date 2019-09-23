import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
const ContactPage = () => {
  useEffect(() => {
    setTimeout(() => {
      console.clear()
      console.log("Hello! Thanks for checking out my portfolio.")
    }, 2200)
  })
  return (
    <section className="contact content" id="contact">
      <ul className="contact-links">
        <li>
          <a href="tel:+18163856369">
            <h3>Phone</h3>
            <h4>(816)-385-6369</h4>
            <FontAwesomeIcon icon={faMobileAlt} />
          </a>
        </li>
        <li>
          <a href="mailto:cembreyfarquhar@gmail.com">
            <h3>E-mail</h3>
            <h4>
              cembreyfarquhar
              <br />
              @gmail.com
            </h4>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ChanceHalo" target="_blank">
            <h3>Twitter</h3>
            <h4>@ChanceHalo</h4>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>

        <li>
          <a
            href="https://www.github.com/cembreyfarquhar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>GitHub</h3>
            <h4>
              https://
              <br />
              github.com/
              <br />
              cembreyfarquhar
            </h4>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chance-embrey-farquhar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>Linked-in</h3>
            <h4>
              linkedin.com/
              <br />
              in/
              <br />
              cembreyfarquhar
            </h4>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default ContactPage
