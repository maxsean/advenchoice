import React from 'react'
import ChoiceTile from '../components/ChoiceTile'

class ChoicesContainer extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    e.preventDefault()
    this.props.dispatch({type: 'ADD_TRAIT', trait: e.target.dataset.outcome})
    let encounter_id = e.target.dataset.next
    fetch(`/api/v1/encounters/${encounter_id}`)
    .then(response => response.json())
    .then(data => {
      this.props.dispatch({type: 'CHANGE_ENCOUNTER', encounter: data, choices: data["choices"]})
      console.log(this.props)
    })
  }

  render(){
    let choices;
    if (this.props.choices.length > 0) {
      choices = this.props.choices.map(choice => {
        return(
          <ChoiceTile
            key={String(Date.now()) + '-' + choice.id}
            choice={choice}
            handleClick={this.handleClick}
          />
        )
      })
    }
    return(
      <div>
        <ul>
          {choices}
        </ul>
      </div>
    )
  }
}

export default ChoicesContainer
