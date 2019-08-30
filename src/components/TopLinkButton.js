import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const TopLinkButton = () => {
  const [toText, setToText] = useState(null)
  const [toPath, setToPath] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setToText(window.location.pathname === "/contact" ? "Projects" : "Contact")
    setToPath(window.location.pathname === "/contact" ? "projects" : "contact")
    setLoaded(true);
  }, [])

  return (
    loaded ? 
    <Link to={toPath} className="top-link-button">
      Go to {toText}
    </Link>
    : <h4>Loading</h4>
  )
}

export default TopLinkButton
