import React, { useEffect } from "react"
import SEO from "../components/seo"
import Header from "../components/Header"
import Projects from "../pages/projects";
import Contact from "../pages/contact";

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => {
      console.clear()
      console.log("Hello! Thanks for checking out my portfolio.")
    }, 2200)
  })
  return (
    <section className="container">
      <SEO
        title="Chance Halo"
        description="Personal site for Chance Embrey-Farquhar"
      />
      <Header />
      <Projects />
      <Contact />
    </section>
  )
}

export default IndexPage
