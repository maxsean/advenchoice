import React from 'react';
import { connect } from 'react-redux';
import RevelationsContainer from '../containers/RevelationsContainer';

const mapStateToProps = state => {
  return {
    revelations: state.revelations
  };
};

const Revelations = connect(
  mapStateToProps
)(RevelationsContainer)

export default Revelations;
