import React from 'react';

const GroceryItem = ({item}) => (
  <div>{item.description}: {item.quantity}</div>
)

export default GroceryItem;