import React from 'react'

const ChoiceTile = (props) => {
  let outcome;
  if (props.choice["outcomes"][0]) {
    outcome = props.choice["outcomes"][0]["body"]
  }
  return(
    <li data-next={props.choice.next} data-outcome={outcome} onClick={props.handleClick}>
      {props.choice.body}
    </li>
  )
}

export default ChoiceTile
