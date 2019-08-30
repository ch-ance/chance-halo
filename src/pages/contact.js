import React from "react"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import TopLinkButton from "../components/TopLinkButton";
const IndexPage = () => {
    return (
        <section className="content">
            <TopLinkButton />
            <SEO
                title="Chance Halo"
                description="Personal site for Chance Embrey-Farquhar"
            />
            <ul className="contact-links">
                <li>
                    <a href="tel:+18163856369">
                        <h3>Call or Text </h3>
                        <FontAwesomeIcon icon={faMobileAlt} />
                    </a>
                </li>
                <li>
                    <a href="mailto:cembreyfarquhar@gmail.com">

                        <h3>E-mail</h3>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.github.com/cembreyfarquhar"
                        rel="noopener noreferrer"
                        target="_blank"
                    >

                        <h3>GitHub</h3>
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
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>

        </section>
    )
}

export default IndexPage
