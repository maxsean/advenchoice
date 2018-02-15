import React from 'react';
import Choices from '../connectors/Choices';
import Toggles from '../connectors/Toggles';
import Skills from '../connectors/Skills';
import { CSSTransitionGroup } from 'react-transition-group';

class EncounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var encounter = this.props.user.encounter;
    this.changeEncounter(encounter);
  };

  changeEncounter(id) {
    fetch(`/api/v1/encounters/${id}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      this.props.dispatch({type: 'CHANGE_ENCOUNTER', encounter: data, choices: data["choices"]})
    });
  };

  updateUser(id){
    let user = this.props.user;
    let payload = {
      user: user,
      new_encounter: id
    };
    fetch(`/api/v1/users/${user.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
  };

  handleClick(event) {
    let id = this.props.encounter.id;
    if (event.target.id == 'prev') {
      id = id - 1
      this.updateUser(id)
      this.changeEncounter(id)
    } else if (event.target.id == 'next') {
      id = id + 1
      this.updateUser(id)
      this.changeEncounter(id)
    };
  };

  render() {
    let encounterText = this.props.encounter.body;
    let encounterid = this.props.encounter.id;
    let chapter = this.props.encounter.chapter;
    return(
      <div className="flex-container">
        <div className="banner-container">
          <h1>{chapter}</h1>
        </div>
        <CSSTransitionGroup
          transitionName="encountertext"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        <div
          key={1}
          className="encounter-container">
            <span>
              {encounterText}
            </span>
          <Choices/>
        </div>
      </CSSTransitionGroup>
        <div className="utility">
          <button
            onClick={this.handleClick}
            className='hvr-back-pulse'
            id='prev'>
            Previous Page
          </button>
          <button
            onClick={this.handleClick}
            className='hvr-back-pulse'
            id='next'>
            Next Page
          </button>
        </div>
        <Toggles />
      </div>
    );
  };
};

export default EncounterContainer;
