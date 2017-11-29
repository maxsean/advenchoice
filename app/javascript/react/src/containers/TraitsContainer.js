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
      <ul>
        Traits:
        {traits}
      </ul>
    </div>
  )
}

export default TraitsContainer
