import React from 'react'
import { connect } from 'react-redux'

import ChoicesContainer from '../containers/ChoicesContainer'

const mapStateToProps = state => {
  return {
    choices: state.choices
  }
}

const Choices = connect(
  mapStateToProps
)(ChoicesContainer)

export default Choices
