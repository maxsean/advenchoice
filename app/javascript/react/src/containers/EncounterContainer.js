import React from 'react'


class EncounterContainer extends React.Component {
  constructor(props){
    super(props);
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
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default EncounterContainer
