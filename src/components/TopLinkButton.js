import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const TopLinkButton = () => {
  const [toText, setToText] = useState(null)
  const [toPath, setToPath] = useState(null)

  useEffect(() => {
    setToText(window.location.pathname === "/contact" ? "Projects" : "Contact")
    setToPath(window.location.pathname === "/contact" ? "projects" : "contact")
  }, [])

  console.log("TO PATH: ", toPath)

  return (
    <Link to={toPath} className="top-link-button">
      Go to {toText}
    </Link>
  )
}

export default TopLinkButton
