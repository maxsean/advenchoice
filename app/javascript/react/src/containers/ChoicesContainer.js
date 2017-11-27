import React from 'react'
import ChoiceTile from '../components/ChoiceTile'

class ChoicesContainer extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.fetchEncounter = this.fetchEncounter.bind(this)
  }

  handleClick(e){
    e.preventDefault()
    debugger;
    if (e.target.dataset.outcome_type == "trait") {
      this.props.dispatch({type: 'ADD_TRAIT', trait: e.target.dataset.outcome})
    } else if (e.target.dataset.outcome_type == "add_item") {
      this.props.dispatch({type: 'ADD_ITEM', item: e.target.dataset.outcome})
    }

    this.fetchEncounter(e.target.dataset.next)
  }

  fetchEncounter(id){
    fetch(`/api/v1/encounters/${id}`)
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
