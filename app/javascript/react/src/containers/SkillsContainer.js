import React from 'react'

const SkillsContainer = (props) => {
  let skills = props.skills.map(skill => {
    return(
      <li key={String(Date.now()) + '-' + props.skills.indexOf(skill)}>
        {skill}
      </li>
    )
  })
  return(
    <div className="skills-container">
      <ul>
        Skills:
        {skills}
      </ul>
    </div>
  )
}

export default SkillsContainer
