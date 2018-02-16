import React from 'react';
import CharacterPage from '../components/CharacterPage'

class CharactersContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    };
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.fetchCharacters();
  };

  handleClick(e) {
    e.preventDefault();
    this.props.dispatch({type: "CHANGE_CHARACTER", character: e.target.name});
  };

  fetchCharacters() {
    fetch('/api/v1/characters', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data
      })
    })
  };

  render() {
    let characters;
    let page;
    let journals;

    if(this.state.characters.length > 0) {
      characters = this.state.characters.map(character => {
        return(
          <button
            className="hvr-back-pulse"
            key={character.id}
            onClick={this.handleClick}
            name={character.name}>
            {character.name}
          </button>
        )
      })
    }

    if(this.props.revs.length > 0) {
      journals = this.props.revs.filter(rev => rev.journal.character.name == this.props.character)

      page =
      <CharacterPage
        entries={journals} name={this.props.character}
      />
    }

    return(
      <div className="character-revelations">
        <div className="roster">
          {characters}
        </div>
        {page}
      </div>
    );
  };
};

export default CharactersContainer;
