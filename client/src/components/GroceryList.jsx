import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = ({list}) => (
  <div className="groceries">
  {
    list.map((listItem, index) => {
       return <GroceryItem item ={listItem} />
    })
  }
  </div>  
)

export default GroceryList;