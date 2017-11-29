import React from 'react'

const InventoryContainer = (props) => {
  let inventory = props.inventory.map(item => {
    return(
      <li key={String(Date.now()) + '-' + props.inventory.indexOf(item)}>
        {item}
      </li>
    )
  })
  return(
    <div className="inventory-container">
      Inventory:
      {inventory}
    </div>
  )
}

export default InventoryContainer
