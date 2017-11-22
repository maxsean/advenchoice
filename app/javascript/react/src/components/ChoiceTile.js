import React from 'react'

const ChoiceTile = (props) => {
  return(
    <li data-next={props.choice.next} onClick={props.handleClick}>
      {props.choice.body}
    </li>
  )
}

export default ChoiceTile
