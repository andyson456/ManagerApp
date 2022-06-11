import React, { Component, Fragment, useState } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"
 
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
 
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async addItem(e) {
    e.preventDefault();
    if (this._inputElement.value !== "") {
      var newItem = {
        key: Date.now(),
        description: this._inputElement.value
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);

    try {
      const body = newItem;
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      //console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  async deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }


  render(){
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;