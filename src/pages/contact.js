import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import NavBar from "../components/NavBar"
const IndexPage = () => {
    return (
        <section className="content">
            <SEO
                title="Chance Halo"
                description="Personal site for Chance Embrey-Farquhar"
            />
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

        </section>
    )
}

export default IndexPage
