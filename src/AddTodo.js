import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: null,
    body: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  HandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <label>Title:</label>
          <input type="text" id="title" onChange={this.handleChange} />

          <label>body:</label>
          <input type="text" id="body" onChange={this.handleChange} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
