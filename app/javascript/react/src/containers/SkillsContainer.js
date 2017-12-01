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
      <div className="status-label">
        <h3>Skills</h3>
      </div>
      <ul>
        {skills}
      </ul>
    </div>
  )
}

export default SkillsContainer
