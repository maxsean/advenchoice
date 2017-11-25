import React from 'react'
import { connect } from 'react-redux'

import EncounterContainer from '../containers/EncounterContainer'

const mapStateToProps = state => {
  return {
    encounter: state.encounter
  }
}

const Encounter = connect(
  mapStateToProps
)(EncounterContainer)

export default Encounter
