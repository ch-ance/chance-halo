import React from "react"
import { Link } from "gatsby"

const TopLinkButton = () => {
  return (
    <div className="top-link-buttons">
      <Link to={"/projects"} className="top-link-button">
        View Projects
      </Link>
      <Link to={"/"} className="top-link-button">
        Home
      </Link>
      <Link to={"/contact"} className="top-link-button">
        Contact Me
      </Link>
    </div>
  )
}

export default TopLinkButton
