import React from "react"

const Skill = ({ selectSkill, skill }) => {
  return (
    <li
      onClick={e => {
        e.preventDefault()
        selectSkill(skill)
      }}
    >
      {skill}
    </li>
  )
}

export default Skill
