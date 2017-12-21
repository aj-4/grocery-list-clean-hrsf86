import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import {groceryList} from '../../database/data.js';
import AddGrocery from './components/AddGrocery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList
    }
  }

  updateList(newItem) {
    this.setState({'list': this.state.list.concat(newItem)});
  }

  render () {
    return (
      <div>
      <AddGrocery updateList={this.updateList.bind(this)}/>
      <GroceryList list={this.state.list}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));