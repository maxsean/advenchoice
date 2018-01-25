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
    if (e.target.dataset.outcome_type == "add_trait") {
      this.props.dispatch({type: 'ADD_TRAIT', trait: e.target.dataset.outcome})
    } else if (e.target.dataset.outcome_type == "add_item") {
      this.props.dispatch({type: 'ADD_ITEM', item: e.target.dataset.outcome})
    }

    this.updateUser(e.target.dataset.next)
    this.fetchEncounter(e.target.dataset.next)
  }

  updateUser(id){
    let user = this.props.user
    let payload = {
      user: user,
      new_encounter: id
    }
    fetch(`/api/v1/users/${user.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
  }

  fetchEncounter(id){
    fetch(`/api/v1/encounters/${id}`)
    .then(response => response.json())
    .then(data => {
      this.props.dispatch({type: 'CHANGE_ENCOUNTER', encounter: data, choices: data["choices"]})
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
      <div className="choices-container">
        <ul>
          {choices}
        </ul>
      </div>
    )
  }
}

export default ChoicesContainer
