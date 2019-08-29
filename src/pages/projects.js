import React, { useState } from "react"
import TopLinkButton from "../components/TopLinkButton"
import Project from "../components/Project"
import rxidWeb from "../images/rxidweb.gif"
import chattyWeb from "../images/chattyweb.gif"
const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0)

  const projects = [
    {
      name: "RxID",
      webImageSrc: rxidWeb,
      codeImageSrc: "",
      topInfo: "RxID is a pill identifier and reminder application. This was a capstone project built in 5 weeks where I worked with a team of other web developers, data scientists, and a UX designer. \n\nTech stack includes React, Redux, PostgreSQL, and the entire project is hosted on AWS.",
      url: "https://www.rxid.net",
      github: "https://github.com/labs12-rxid/",
    },
    {
      name: "Chatty",
      webImageSrc: chattyWeb,
      codeImageSrc: "",
      topInfo: "Chatty is a personal project that is intended to give users a secure and private instant messaging experience. Data is stored in web storage rather than an online database to protect private information. \n\nTech stack includes React, ContextAPI w/ Hooks, PostgreSQL, and WebSockets",
      url: "https://www.chattyapp.chat",
      github: "https://github.com/cembreyfarquhar/chatty",
    },
  ]

  return (
    <div className="content">
      <TopLinkButton />
      <Project
        project={projects[projectIndex]}
        setProjectIndex={setProjectIndex}
        projectIndex={projectIndex}
      />
      {/* <h1>Coming Soon. For now, visit my stared repositories on <a href="https://github.com/cembreyfarquhar" style={{color: "blue"}} target="_blank">GitHub</a></h1> */}
    </div>
  )
}

export default Projects
