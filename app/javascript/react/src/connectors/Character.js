import React from 'react';
import { connect } from 'react-redux';
import CharactersContainer from '../containers/CharactersContainer';

const mapStateToProps = state => {
  return{
    character: state.character
  };
};

const Character = connect(
  mapStateToProps
)(CharactersContainer)

export default Character;
