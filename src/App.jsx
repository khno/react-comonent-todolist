import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import ListItems from "./ListItems";
import Header from "./Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: []
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ 
      todoItem: event.target.value 
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      todoItem: "",
      items: [
        ...this.state.items, 
        this.state.todoItem
      ]
    });
  }

  render() {
    return (
      <div className="container">
        <Header title="TodoList"/>
        <form className="form-wrap" onSubmit={this.onSubmit}>
          <input value={this.state.todoItem} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <ListItems items={this.state.items} />
      </div>
    );
  }
}
render(
  <App />, 
  document.getElementById("app")
);
