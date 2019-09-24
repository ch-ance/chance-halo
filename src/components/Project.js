import React from "react"

const Project = ({ project, setProjectIndex, projectIndex }) => {
  return (
    <div className="project">
      <div className="content-viewer">
        <button id="left" style={{fontWeight: "bold"}} onClick={decrement}>{"<"}</button>
        <div className="img-container">
          <img alt={project.altText} src={project.webImageSrc} />
        </div>
        <button id="right" style={{fontWeight: "bold"}} onClick={increment}>{">"}</button>
      </div>
      <div className="info-panel">
        <h2>{project.name}</h2>
        <p>
          {project.topInfo}
        </p>
        <p>
          <ul>
            <li className={project.url === "none" ? "noUrl" : null}><a target="_blank" rel="noopener noreferrer" href={project.url}>Visit Site</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href={project.github}>View Code</a></li>
          </ul>
        </p>
      </div>
    </div>
  )

  function decrement(event) {
    event.preventDefault();
    projectIndex >= 1 ? setProjectIndex(projectIndex - 1) : setProjectIndex(3)
  }

  function increment(event) {
    event.preventDefault();
    projectIndex <= 4 ? setProjectIndex(projectIndex + 1) : setProjectIndex(0)
  }
}

export default Project
