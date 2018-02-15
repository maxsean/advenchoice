import React from 'react';
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
    this.props.dispatch({type: "TOGGLE_OFF", toggle: e.target.name});
  }

  render() {
    let revs = this.props.revelations
    console.log(revs)

    let korsovw;
    if(revs.length > 0) {
      korsovw = revs.filter(rev => rev.journal.character.name == "Korsov Whiteacre")
    }
    return(
      <div className="revelations-container">
        <button
          name="revelations"
          onClick={this.handleClose}>X</button>
          <CharacterPage
            name={"Korsov Whiteacre"}
            entries={korsovw}
          />
      </div>
    );
  };
};
export default RevelationsContainer;
