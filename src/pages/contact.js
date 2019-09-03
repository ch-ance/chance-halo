import React, { useEffect } from "react"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import TopLinkButton from "../components/TopLinkButton";
const IndexPage = () => {
    useEffect(() => {
        setTimeout(() => {
          console.clear();
          console.log("Hello! Thanks for checking out my portfolio.")
        }, 2200)
      })
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
                        <h4>(816)-385-6369</h4>
                        <FontAwesomeIcon icon={faMobileAlt} />
                    </a>
                </li>
                <li>
                    <a href="mailto:cembreyfarquhar@gmail.com">

                        <h3>E-mail</h3>
                        <h4>cembreyfarquhar@gmail.com</h4>
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
                        <h4>cembreyfarquhar</h4>
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
                        <h4>cembreyfarquhar</h4>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>

        </section>
    )
}

export default IndexPage
