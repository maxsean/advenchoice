import React from 'react'
import Choices from '../connectors/Choices'
import Traits from '../connectors/Traits'
import Inventory from '../connectors/Inventory'
import Skills from '../connectors/Skills'

class EncounterContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
    var encounter = this.props.encounter
    fetch(`/api/v1/encounters/${encounter.id}`)
    .then(response => response.json())
    .then(data => {
      this.props.dispatch({type: 'CHANGE_ENCOUNTER', encounter: data, choices: data["choices"]})
      console.log(this.props)
    })
  }

  render(){
    let encounterText = this.props.encounter.body
    return(
      <div>
        {encounterText}
        <Choices/>
        <Traits/>
        <Inventory/>
        <Skills/>
      </div>
    )
  }
}

export default EncounterContainer
