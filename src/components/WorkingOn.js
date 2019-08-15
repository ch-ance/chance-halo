import React, { useEffect } from "react"

const WorkingOn = () => {
  const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly"

  const TOKEN_PATH = "token.json"

  useEffect(() => {
    console.log("Hey")
  }, [])

  return (
    <div className="working-on-container">
      <h3>I'm currently rebuilding my portfolio site using GatsbyJS</h3>
      <h4>Wed 8/14 @6:35pm</h4>
    </div>
  )
}

export default WorkingOn
