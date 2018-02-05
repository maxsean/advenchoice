import React from 'react';
import { connect } from 'react-redux';
import JournalContainer from '../containers/JournalContainer';

const mapStateToProps = state => {
  return{
    journal: state.journal
  };
};

const Journal = connect(
  mapStateToProps
)(JournalContainer)

export default Journal;
