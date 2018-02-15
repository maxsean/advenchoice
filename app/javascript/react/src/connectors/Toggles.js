import React from 'react';
import { connect } from 'react-redux';
import TogglesContainer from '../containers/TogglesContainer';

const mapStateToProps = state => {
  return{
    toggles: state.toggles
  };
};

const Toggles = connect(
  mapStateToProps
)(TogglesContainer)

export default Toggles;
