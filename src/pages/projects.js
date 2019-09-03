import React, { useState, useEffect } from "react"
import TopLinkButton from "../components/TopLinkButton"
import Project from "../components/Project"
import rxidWeb from "../images/rxidweb.gif"
import chattyWeb from "../images/chattyweb.gif"
import snj from "../images/snj.gif"
import impython from "../images/impython.gif"
import nodebe from "../images/nodebe.gif"

const Projects = () => {
  useEffect(() => {
    setTimeout(() => {
      console.clear();
      console.log("Hello! Thanks for checking out my portfolio.")
    }, 2200)
  })

  const [projectIndex, setProjectIndex] = useState(0)

  const projects = [
    {
      name: "RxID",
      webImageSrc: rxidWeb,
      altText: "A GIF of a web application",
      topInfo:
        "RxID is a pill identifier and reminder application. This was a capstone project built in 5 weeks where I worked with a team of other web developers, data scientists, and a UX designer. \n\nTech stack includes React, Redux, PostgreSQL, and the entire project is hosted on AWS.",
      url: "https://www.rxid.net",
      github: "https://github.com/labs12-rxid/",
    },
    {
      name: "Chatty",
      webImageSrc: chattyWeb,
      altText: "A GIF of a web application",
      topInfo:
        "Chatty is a personal project that is intended to give users a secure and private instant messaging experience. Data is stored in web storage rather than an online database to protect private information. \n\nTech stack includes React, ContextAPI w/ Hooks, PostgreSQL, and WebSockets",
      url: "https://www.chattyapp.chat",
      github: "https://github.com/cembreyfarquhar/chatty",
    },
    {
      name: "Node Back End Starter",
      webImageSrc: nodebe,
      altText: "A GIF of a web application",
      topInfo:
        "This is a template to be used for creating Node APIs. The project is written in Typescript and contains everything needed to get started building an API including authentication, jsonwebtokens, custom middleware, and endpoints to access the built in routes.",
      github: "https://github.com/cembreyfarquhar/Node-Back-End-Starter",
    },
    {
      name: "SnJ Architects",
      webImageSrc: snj,
      altText: "A GIF of a web application",
      topInfo:
        'SnJ Architects was used to show mastery of HTML5, CSS, & JS fundementals. LESS preprocessing was used with semantic HTML & DOM manipulation. Also, typing "bananas" displays an easter egg :P',
      url: "https://www.snjarchitects.netlify.com",
      github: "https://github.com/cembreyfarquhar/User-Interface-Project-Week",
    },
    {
      name: "Python Exercises",
      webImageSrc: impython,
      altText: "A GIF of a web application",
      topInfo:
        "Here are a few Python projects that I've worked on. I enjoy making command line applications that serve a mathematical purpose or help prove something.",
      // url: "",
      github: "https://github.com/cembreyfarquhar/impractical-python",
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
