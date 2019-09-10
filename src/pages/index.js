import React, { useEffect } from "react"
import SEO from "../components/seo"
import Header from "../components/Header"

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => {
      console.clear()
      console.log("Hello! Thanks for checking out my portfolio.")
    }, 2200)
  })
  return (
    <section className="content">
      <SEO
        title="Chance Halo"
        description="Personal site for Chance Embrey-Farquhar"
      />
      <Header />
    </section>
  )
}

export default IndexPage
