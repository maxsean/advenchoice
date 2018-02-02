import React from 'react';

const InventoryContainer = (props) => {
  let inventory = props.inventory.map(item => {
    return(
      <li key={String(Date.now()) + '-' + props.inventory.indexOf(item)}>
        {item}
      </li>
    );
  });
  return(
    <div className="inventory-container">
      <div className="status-label">
        <h3>Inventory</h3>
      </div>
      <ul>
        {inventory}
      </ul>
    </div>
  );
};

export default InventoryContainer;
