import React from "react"
import PortfolioProject from "./PortfolioProject"
// import PortfolioProject from "./PortfolioProject"

const Projects = ({ skill, projects }) => {
  const theseProjects = projects.projects.filter(project => {
    return project.skills.includes(skill)
  })
  console.log("PROJECTS IN PROJECTS PAGE: ", theseProjects)
  return (
    <>
      <h4>{skill} Projects</h4>
      <ul>
        {theseProjects.map(project => {
          return <PortfolioProject project={project} />
        })}
      </ul>
    </>
  )
}

export default Projects
