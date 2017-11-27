import React from 'react'
import { connect } from 'react-redux'
import InventoryContainer from '../containers/InventoryContainer'

const mapStateToProps = state => {
  return{
    inventory: state.inventory
  }
}

const Inventory = connect(
  mapStateToProps
)(InventoryContainer)

export default Inventory
