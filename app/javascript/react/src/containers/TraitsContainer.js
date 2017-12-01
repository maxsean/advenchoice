import React from 'react'

const TraitsContainer = (props) => {
  let traits = props.traits.map(trait => {
    return(
      <li key={String(Date.now()) + '-' + props.traits.indexOf(trait)}>
        {trait}
      </li>
    )
  })
  return(
    <div className="traits-container">
      <div className="status-label">
        <h3>Traits</h3>
      </div>
      <ul>
        {traits}
      </ul>
    </div>
  )
}

export default TraitsContainer
