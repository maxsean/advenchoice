import React from 'react'
import Choices from '../connectors/Choices'

class EncounterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      change: {}
    }
  }

  componentDidMount() {
    var encounter = this.props.encounter
    fetch(`/api/v1/encounters/${encounter.id}`)
    .then(response => response.json())
    .then(data => {
      this.props.dispatch({type: 'CHANGE_ENCOUNTER', encounter: data.encounter, choices: data.choices})
      console.log(this.props.encounter)
      console.log(this.props.choices)
    })
  }

  render(){
    let encounterText = this.props.encounter.body
    return(
      <div>
        {encounterText}
        <Choices/>
      </div>
    )
  }
}

export default EncounterContainer
