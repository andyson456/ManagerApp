import React, { Component } from "react";
 
class TodoItems extends Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  async delete(key) {
      this.props.delete(key);

      try {
        const deleteTodo = await fetch(`http://localhost:5000/todos/${key}`, {
          method: "DELETE"
        });
  
        console.log(deleteTodo);
      } catch (err) {
        console.error(err.message);
      }
  }

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.description}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;