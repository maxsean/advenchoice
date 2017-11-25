import React from 'react'
import { connect } from 'react-redux'
import TraitsContainer from '../containers/TraitsContainer'

const mapStateToProps = state => {
  return{
    traits: state.traits
  }
}

const Traits = connect(
  mapStateToProps
)(TraitsContainer)

export default Traits
