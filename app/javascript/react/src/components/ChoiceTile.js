import React from 'react'

const ChoiceTile = (props) => {
  let outcome;
  let outcome_type;
  if (props.choice["outcomes"][0]) {
    outcome = props.choice["outcomes"][0]["body"]
    outcome_type = props.choice["outcomes"][0]["outcome_type"]
  }
  return(
    <li data-next={props.choice.next} data-outcome={outcome} data-outcome_type={outcome_type} onClick={props.handleClick}>
      {props.choice.body}
    </li>
  )
}

export default ChoiceTile
