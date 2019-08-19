import React from "react"
import PortfolioProject from "./PortfolioProject"
// import PortfolioProject from "./PortfolioProject"

const Projects = ({ skill, projects, selectSkill }) => {
  const theseProjects = projects.projects.filter(project => {
    return project.skills.includes(skill)
  })
  console.log("PROJECTS IN PROJECTS PAGE: ", theseProjects)
  return (
    <>
      <div>
        <button
          onClick={e => {
            e.preventDefault()
            selectSkill(null)
          }}
        >
          View Skills
        </button>
        <h4>{skill} Projects</h4>
      </div>
      <ul>
        {theseProjects.map(project => {
          return <PortfolioProject project={project} />
        })}
      </ul>
    </>
  )
}

export default Projects
