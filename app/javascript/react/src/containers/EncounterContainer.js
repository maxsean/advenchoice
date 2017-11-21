import React from 'react'


const EncounterContainer = (props) => {
  debugger;
  let encounter_id = props.store.getState()
  console.log(encounter_id)

  return(
    <div>
      Hello
    </div>
  )
}

export default EncounterContainer
