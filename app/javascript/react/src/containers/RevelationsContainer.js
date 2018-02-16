import React from 'react';
import Character from '../connectors/Character'
import CharacterPage from '../components/CharacterPage';

class RevelationsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  };

  componentDidMount() {
    this.fetchRevelations();
  };

  fetchRevelations() {
    fetch('/api/v1/revelations/', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      this.props.dispatch({type: 'UPDATE_REV', revelations: data})
    });
  };

  handleClose(e) {
    e.preventDefault();
    this.props.dispatch({type: "TOGGLE_OFF", toggle: e.target.name})
    this.props.dispatch({type: "CHANGE_CHARACTER", character: ""})
  }

  render() {
    let revs = this.props.revelations

    let korsovw;

    return(
      <div className="revelations-container">
        <div className="revelations-contents">
          <button
            className="hvr-back-pulse"
            name="revelations"
            onClick={this.handleClose}>Close Revelations</button>
            <Character
              revs={revs}
            />
        </div>
      </div>
    );
  };
};
export default RevelationsContainer;
