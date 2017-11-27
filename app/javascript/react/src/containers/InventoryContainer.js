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
    <div>
      Inventory:
      {inventory}
    </div>
  )
}

export default InventoryContainer
