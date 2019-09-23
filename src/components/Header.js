import React from "react"
import Button from "./Button"

const Header = () => {
  return (
    <header id="chance-halo" className="content">
      {/* <NavBar /> */}
      <h1>Chance Embrey-Farquhar</h1>
      <h2>Software Engineer, Full-Stack Web Developer</h2>
      <div className="buttons">
        <Button to="#projects" />
      </div>
    </header>
  )
}

export default Header
