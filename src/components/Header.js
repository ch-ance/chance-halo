import React from "react"
import Button from "./Button"

const Header = () => {
  return (
    <header id="chance-halo">
      {/* <NavBar /> */}
      <h1>Chance Embrey-Farquhar</h1>
      <h2>Software Engineer, Full-Stack Web Developer</h2>
      <div className="buttons">
        <Button to="projects" />
        <Button to="contact" />
      </div>
    </header>
  )
}

export default Header
