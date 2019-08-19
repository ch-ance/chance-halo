import React, { useState, useEffect } from "react"
import projectsData from "../projectsData.json"
import SEO from "../components/seo"
import Header from "../components/Header"
import Skill from "../components/Skill"
import Projects from "../components/Projects"

const IndexPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const _fetchProjects = async () => {
      try {
        setProjects(projectsData)
      } catch (error) {
        console.error(error)
      }
    }

    _fetchProjects()
  }, [])

  return (
    <section className="content">
      <SEO
        title="Chance Halo"
        description="Personal site for Chance Embrey-Farquhar"
      />

      {/* Header */}
      <Header />
      {/* Main */}
      <section className="main">
        <section className="topic skills" id="skills">
          <a href="#skills">
            <h3>Technical Skills</h3>
          </a>
          {selectedSkill === null ? (
            <ul className="skills-list">
              <Skill skill={"Javascript"} selectSkill={selectSkill} />
              <Skill skill={"Python"} selectSkill={selectSkill} />
              <Skill skill={"React"} selectSkill={selectSkill} />
              <Skill skill={"Typescript"} selectSkill={selectSkill} />
              <Skill skill={"PostgreSQL"} selectSkill={selectSkill} />
              <Skill skill={"NodeJS"} selectSkill={selectSkill} />
              <Skill skill={"Java"} selectSkill={selectSkill} />
              <Skill skill={"C#"} selectSkill={selectSkill} />
            </ul>
          ) : (
            <Projects
              skill={selectedSkill}
              projects={projects}
              selectSkill={selectSkill}
            />
          )}
        </section>

        <section className="topic" id="experience">
          <h3>More About Me</h3>
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
        </section>

        <footer>
          <span>@Copyright 2019 Chance Embrey-Farquhar</span>
        </footer>
      </section>
    </section>
  )

  function selectSkill(skill) {
    setSelectedSkill(skill)
    console.log("Selected ", skill)
  }
}

{
  /* <header>
<h1>Chance Embrey-Farquhar</h1>
<h2>Full-Stack Web Developer</h2>
<ul className="contact-links">
  <li>
    <a href="tel:+18163856369">
      <FontAwesomeIcon icon={faMobileAlt} />
    </a>
  </li>
  <li>
    <a href="mailto:cembreyfarquhar@gmail.com">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  </li>
  <li>
    <a
      href="https://www.github.com/cembreyfarquhar"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/in/chance-embrey-farquhar/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </li>
</ul>
</header> */
}
export default IndexPage
