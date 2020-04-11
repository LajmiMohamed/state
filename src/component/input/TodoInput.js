import React, { Component } from 'react'
import "./input.css"
export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit}=this.props
        return (
            <div className="x">
              <form onSubmit={handleSubmit}>
             
<input type ="text" className="input" placeholder="add a todo item" value={item} onChange={handleChange}/>
<button type="submit" className="button">add </button>
              </form>
            </div>
        )
    }
}
