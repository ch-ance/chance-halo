import React, { useEffect } from "react"
import SEO from "../components/seo"
import Header from "../components/Header"

const IndexPage = () => {
  useEffect(() => {
    console.clear();
    console.log("Hello! Thanks for checking out my portfolio.")
  })
  return (
    <section className="content">
      <SEO
        title="Chance Halo"
        description="Personal site for Chance Embrey-Farquhar"
      />

      {/* Header */}
      <Header />
      {/* Main */}
      {/* <section className="main">
        <section className="topic" id="experience">
          <h3>A brief introduction</h3>
          <p>
            I am a software engineer with a deep skillset in full-stack web
            development. I gradudated from Lambda School in August 2019. In my
            year at Lambda, I spent 40+ hours a week practicing full-stack web
            development tools such as React and NodeJS, as well as crucial
            computer science concepts such as data structures and time
            complexity. I took two separate opportunites to become a Teaching
            Assistant at Lambda, during which I mentored multiple groups of new
            students on their path to becoming software developers.
          </p>
          <p>
      
          </p>
        </section>

        <footer>
          <span>@Copyright 2019 Chance Embrey-Farquhar</span>
        </footer>
      </section> */}
    </section>
  )
}

export default IndexPage
