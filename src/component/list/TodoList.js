import React, { Component } from 'react'
import TodoItem from "../item/TodoItem"
import './list.css'
export default class TodoList extends Component {
    render() {
        const {items,handleDelete}=this.props
        return (
            <ul>

            <h2 className="text">Todo List</h2>
            {items.map(item=>{
              return <TodoItem key={item.id}
               title={item.title}
               handleDelete={()=>handleDelete(item.id)}
               />
            } )}    
          
            </ul>
        )
    }
}
