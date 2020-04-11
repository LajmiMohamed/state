import React,{ Component } from 'react';
import './App.css';
import TodoInput from "./component/input/TodoInput"
import TodoList from "./component/list/TodoList"


class App extends Component {
  state={
    items:[],
    id:0,
    item:'',
    editItem:false
  }
handleChange= e =>{
  this.setState({
item: e.target.value
  } )
}
handleSubmit= (e)=>{
e.preventDefault();
const newItem={
id:this.state.id,
title:this.state.item
}
console.log(newItem)
const updateItems = [...this.state.items,newItem]

this.setState({
  items:updateItems,
  item:'',
  id:this.state.id+1
});

};
handleDelete= id =>{
  const filteredItems= this.state.items.filter(item=>
    item.id !== id);
    this.setState({
      items:filteredItems
    });
}  
render (){
  return (<div >
 
    <TodoInput item={this.state.item}  handleChange={this.handleChange}
    handleSubmit={this.handleSubmit}/>
    <TodoList items={this.state.items} handleDelete={this.handleDelete}/>
  </div>
  );
}
}
export default App;
