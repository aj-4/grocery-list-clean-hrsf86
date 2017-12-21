import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      idIndex: 4
    }
  }

  addItemFn (e) {
    e.preventDefault();
    this.state.idIndex++;
    var itemObj = {id: this.state.idIndex, quantity: +this.refs.newQuantity.value, description: this.refs.newItem.value};
    this.props.updateList(itemObj);
  }

  render () {
    return (
      <div>
      <form onSubmit={this.addItemFn.bind(this)} className="newItem">
        <div> Add Item <input ref="newItem" type="text" placeholder="name" /></div>
        <div>Quantity <input ref= "newQuantity" type="text" placeholder = '#' /></div>
        <input type="submit" value="add new item"/>
      </form>
      </div>
    );
  }
}

export default AddGrocery;

