import React from "react"
import { Link } from "gatsby"

const Button = ({ to }) => (
  <>
    <Link to={to} className="landing-button">
      <i className="downArrow"></i>
      {to.toUpperCase().slice(1)}
      <i className="downArrow"></i>
    </Link>
  </>
)

export default Button
