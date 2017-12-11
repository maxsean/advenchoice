import React from 'react'
import {connect} from 'react-redux'
import DisplayContainer from '../containers/DisplayContainer'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const Display = connect(
  mapStateToProps
)(DisplayContainer)

export default Display
