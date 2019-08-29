import React from "react"
import { EventEmitter } from "events";

const Project = ({ project, setProjectIndex, projectIndex }) => {
  return (
    <div className="project">
      <div className="content-viewer">
        <button id="left" onClick={decrement}>L</button>
        <div className="img-container">
          <img src={project.webImageSrc} />
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7hsckgOK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/3gs9ef98gkagr342zm5c.png" />
        </div>
        <button id="right" onClick={increment}>R</button>
      </div>
      <div className="info-panel">
        <h2>{project.name}</h2>
        <p>
          {project.topInfo}
        </p>
        <p>
          <ul>
            <li><a href={project.url}>{project.url}</a></li>
            <li><a href={project.github}>{project.github}</a></li>
          </ul>
        </p>
      </div>
    </div>
  )

  function decrement(event) {
    event.preventDefault();
    projectIndex >= 1 && setProjectIndex(projectIndex - 1) 
  }

  function increment(event) {
    event.preventDefault();
    projectIndex < 1 && setProjectIndex(projectIndex + 1)
  }
}

export default Project