import React from "react"

const Skill = ({ skill }) => {
  return (
    <li
      onClick={e => {
        e.preventDefault()
      }}
    >
      {skill}
    </li>
  )
}

export default Skill
