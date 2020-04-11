import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
      const {title,handleDelete}=this.props;
        return (
            <li>
                <h6>{title}</h6>
                <button type="reset" onClick={handleDelete}>delete</button>
                <button type="button">edit</button>
            </li>
        )
    }
}
